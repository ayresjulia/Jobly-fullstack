import React, { useEffect, useState, useContext } from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import "./SearchJob.css";
import UserContext from "./UserContext";

/** Single job card. */

const SearchJob = ({ jobs, cantFind }) => {
	const { id } = useParams();
	const { hasAppliedToJob, applyToJob } = useContext(UserContext);
	const [ applied, setApplied ] = useState();

	useEffect(
		function updatedAppliedStatus () {
			setApplied(hasAppliedToJob(id));
		},
		[ id, hasAppliedToJob ]
	);

	/** Apply for a job */

	async function handleApply (e) {
		e.preventDefault();
		if (hasAppliedToJob(id)) return;
		applyToJob(id);
		setApplied(true);
	}

	let job = jobs.find((job) => parseInt(job.id) === parseInt(id));
	if (!job) return <Redirect to={cantFind} />;

	return (
		<section>
			<Card className="Job">
				<CardBody>
					<CardTitle className="font-weight-bold text-center">{job.title}</CardTitle>

					<p>
						<b>Salary:</b> {job.salary}
					</p>
					<p>
						<b>Equity:</b> {job.equity}
					</p>
					<p>
						<b>Company Name:</b>{" "}
						<Link to={`/companies/${job.companyHandle}`}>{job.companyHandle}</Link>
					</p>
				</CardBody>
				<Button onClick={handleApply} className="Job-btn btn-success" disabled={applied}>
					{applied ? "Applied" : "Apply"}
				</Button>
			</Card>
		</section>
	);
};

export default SearchJob;
