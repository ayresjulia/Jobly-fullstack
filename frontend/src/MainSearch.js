import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, ListGroup, ListGroupItem, CardTitle } from "reactstrap";
import "./MainSearch.css";
import SearchForm from "./forms/SearchForm";

/* Main search changes according to data type. */

const MainSearch = ({ companies, getCompanies, jobs, getJobs }) => {
	return (
		<section className="MainSearch">
			<Card>
				<CardBody>
					{companies && (
						<div>
							<CardTitle className="font-weight-bold text-center">
								<SearchForm searchFor={getCompanies} />
							</CardTitle>
							{companies.map((company) => (
								<ListGroup key={company.handle}>
									<Link to={`/companies/${company.handle}`} key={company.handle}>
										<ListGroupItem key={company.handle}>
											{company.name}
										</ListGroupItem>
									</Link>
								</ListGroup>
							))}{" "}
						</div>
					)}

					{jobs && (
						<div>
							<CardTitle className="font-weight-bold text-center">
								<SearchForm searchFor={getJobs} />
							</CardTitle>

							{jobs.map((job) => (
								<ListGroup key={job.title}>
									<Link to={`/jobs/${job.id}`} key={job.id}>
										<ListGroupItem key={job.title}>{job.title}</ListGroupItem>
									</Link>
								</ListGroup>
							))}
						</div>
					)}
				</CardBody>
			</Card>
		</section>
	);
};

export default MainSearch;
