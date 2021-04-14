import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class. Static class tying together methods used to get/send to the API. */

class JoblyApi {
	// the token to interact with the API is stored here.
	static token;

	static async request (endpoint, data = {}, method = "get") {
		const url = `${BASE_URL}/${endpoint}`;
		const headers = { Authorization: `Bearer ${JoblyApi.token}` };
		const params = method === "get" ? data : {};

		try {
			return (await axios({ url, method, data, params, headers })).data;
		} catch (err) {
			let message = err.response.data.error.message;
			throw Array.isArray(message) ? message : [ message ];
		}
	}

	/** Get companies filtered by name, and single company filtered by handle. */

	static async getCompanies (name) {
		let res = await this.request("companies", { name });
		return res.companies;
	}

	static async getCompany (handle) {
		let res = await this.request(`companies/${handle}`);
		return res.company;
	}

	/** Get jobs filtered by title, and single job fintered by id. */

	static async getJobs (title) {
		let res = await this.request("jobs", { title });
		return res.jobs;
	}

	static async getJob (id) {
		let res = await this.request(`jobs/${id}`);
		return res.job;
	}

	/** Get current user */

	static async getCurrentUser (username) {
		let res = await this.request(`users/${username}`);
		return res.user;
	}

	/** Get token for login from username, password. */

	static async login (data) {
		let res = await this.request(`auth/token`, data, "post");
		return res.token;
	}

	/** Signup for site. */

	static async signup (data) {
		let res = await this.request(`auth/register`, data, "post");
		return res.token;
	}

	/** Save user profile page. */

	static async saveProfile (username, data) {
		let res = await this.request(`users/${username}`, data, "patch");
		return res.user;
	}

	/** Apply to a job */

	static async applyToJob (username, id) {
		await this.request(`users/${username}/jobs/${id}`, {}, "post");
	}
}
export default JoblyApi;
