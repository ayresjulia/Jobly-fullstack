import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./routes-navbar/NavBar";
import Routes from "./routes-navbar/Routes";
import { BrowserRouter, Redirect } from "react-router-dom";
import JoblyApi from "./Api";
import UserContext from "./UserContext";
import jwt from "jsonwebtoken";
import useLocalStorage from "./hooks/useLocalStorage";

/** Key name for storing token in localStorage. */
export const TOKEN_STORAGE_ID = "jobly-token";

/** Jobly application.
 *
 * - infoLoaded: making sure user data has been pulled out from API.
 *
 * - currentUser: user obj from API. 
 *
 * - token: for logged in users, this is their authentication JWT, stored in localStorage.
 */

const App = () => {
	const [ infoLoaded, setInfoLoaded ] = useState(false);
	const [ applicationIds, setApplicationIds ] = useState(new Set([]));
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ token, setToken ] = useLocalStorage(TOKEN_STORAGE_ID);

	/** Load user info from API. Until a user is logged in and they have a token,
	this should not run. It only needs to re-run when a user logs out, so
	the value of the token is a dependency for this effect. */

	useEffect(
		function loadUserInfo () {
			async function getCurrentUser () {
				if (token) {
					try {
						let { username } = jwt.decode(token);
						// put the token on the Api class so it can use it to call the API.
						JoblyApi.token = token;
						let currentUser = await JoblyApi.getCurrentUser(username);
						setCurrentUser(currentUser);
						setApplicationIds(new Set(currentUser.applications));
					} catch (err) {
						console.error("App loadUserInfo: problem loading", err);
						setCurrentUser(null);
					}
				}
				setInfoLoaded(true);
			}
			/** set infoLoaded to false while async getCurrentUser runs; once the
			data is fetched, this will be set back
			to false to display Loading... again. */
			setInfoLoaded(false);
			getCurrentUser();
		},
		[ token ]
	);

	/** Handles user login. */

	async function login (loginData) {
		try {
			let token = await JoblyApi.login(loginData);
			setToken(token);
			return { success: true };
		} catch (errors) {
			console.error("login failed", errors);
			return { success: false, errors };
		}
	}

	/** Handles user signup. */

	async function signup (signupData) {
		try {
			let token = await JoblyApi.signup(signupData);
			setToken(token);
			return { success: true };
		} catch (errors) {
			console.error("signup failed", errors);
			return { success: false, errors };
		}
	}

	/** Checks if a job has been applied for. */

	const hasAppliedToJob = (id) => {
		return applicationIds.has(id);
	};

	/** Apply to a job: makes API call and updates set of application IDs. */

	const applyToJob = (id) => {
		if (hasAppliedToJob(id)) return;
		JoblyApi.applyToJob(currentUser.username, id);
		setApplicationIds(new Set([ ...applicationIds, id ]));
	};

	/** Handles user logout. */

	const logout = () => {
		setCurrentUser(null);
		setToken(null);
	};

	return (
		<div className="App">
			<BrowserRouter>
				<UserContext.Provider value={{ hasAppliedToJob, applyToJob }}>
					<NavBar currentUser={currentUser} logout={logout} />
					<Routes
						login={login}
						signup={signup}
						logout={logout}
						currentUser={currentUser}
					/>
					{!infoLoaded && <Redirect to="/" />}
				</UserContext.Provider>
			</BrowserRouter>
		</div>
	);
};

export default App;
