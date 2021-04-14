import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import JoblyApi from "../Api";
import MainSearch from "../MainSearch";
import Home from "../Home";
import SearchCompany from "../SearchCompany";
import SearchJob from "../SearchJob";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import EditProfileForm from "../forms/EditProfileForm";

/** Main Routes, some are protected and only accessible to logged in users. 
 * If user is not logged in, page redirects to homepage and asks to log in or sign up.
*/

const Routes = ({ login, signup, currentUser }) => {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ companies, setCompanies ] = useState([]);
	const [ jobs, setJobs ] = useState([]);

	useEffect(() => {
		getCompanies();
		getJobs();
	}, []);
	async function getCompanies (name) {
		let companies = await JoblyApi.getCompanies(name);
		setCompanies(companies);
		setIsLoading(false);
	}
	async function getJobs (title) {
		let jobs = await JoblyApi.getJobs(title);
		setJobs(jobs);
		setIsLoading(false);
	}
	if (isLoading) {
		return <p>Loading &hellip;</p>;
	}

	return (
		<Switch>
			<Route exact path="/">
				<Home currentUser={currentUser} />
			</Route>
			{currentUser && (
				<Route exact path="/companies">
					<MainSearch companies={companies} getCompanies={getCompanies} />
				</Route>
			)}
			{currentUser && (
				<Route exact path="/jobs">
					<MainSearch jobs={jobs} getJobs={getJobs} />
				</Route>
			)}
			{currentUser && (
				<Route path="/companies/:handle">
					<SearchCompany companies={companies} jobs={jobs} cantFind="/companies" />
				</Route>
			)}
			{currentUser && (
				<Route path="/jobs/:id">
					<SearchJob jobs={jobs} cantFind="/jobs" />
				</Route>
			)}
			<Route path="/login">
				<LoginForm login={login} />
			</Route>
			<Route path="/signup">
				<SignupForm signup={signup} />
			</Route>
			{currentUser && (
				<Route path="/profile">
					<EditProfileForm currentUser={currentUser} />
				</Route>
			)}

			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
