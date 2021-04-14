import React from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./SearchCompany.css";

/* Single company card. */

const SearchCompany = ({ companies, jobs, cantFind }) => {
	const { handle } = useParams();

	let company = companies.find((company) => company.handle === handle);

	// filter jobs according to company handle to display on company detail page
	let job = jobs.filter((job) => job.companyHandle === company.handle);

	if (!company) return <Redirect to={cantFind} />;

	return (
		<section>
			<Card className="Company">
				<CardBody>
					<CardTitle className="font-weight-bold text-center">{company.name}</CardTitle>
					<CardSubtitle tag="h6" className="mb-2 text-muted text-center">
						{company.description}
					</CardSubtitle>

					<b>Jobs available: </b>
					<ul>
						{job.map((j) => (
							<li key={j.id}>
								<Link to={`/jobs/${j.id}`} key={j.id}>
									<i>{j.title}</i>{" "}
								</Link>
							</li>
						))}
					</ul>
				</CardBody>
			</Card>
		</section>
	);
};

export default SearchCompany;
