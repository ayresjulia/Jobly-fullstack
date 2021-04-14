import React from "react";
import { render } from "@testing-library/react";
import MainSearch from "./MainSearch";
import { MemoryRouter } from "react-router";

let companies = [
	{
		handle: "bauer-gallagher",
		name: "Bauer-Gallagher",
		num_employees: 862,
		description: "Difficult ready trip question produce produce someone.",
		logo_url: "none"
	},
	{
		handle: "test",
		name: "test",
		num_employees: 862,
		description: "Difficult ready trip question produce produce someone.",
		logo_url: "none"
	}
];

let jobs = [
	{
		title: "Conservator, furniture",
		salary: 110000,
		equity: 0,
		company_handle: "watson-davis"
	},
	{
		title: "Some job",
		salary: 110000,
		equity: 0,
		company_handle: "bauer-gallagher"
	}
];

beforeAll(() => {
	companies;
	jobs;
});

afterAll(() => {
	companies = [];
	jobs = [];
});

it("renders without crashing", () => {
	render(<MainSearch />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<MainSearch />);
	expect(asFragment()).toMatchSnapshot();
});

it("renders companies passed to the list", () => {
	const { getByText } = render(
		<MemoryRouter>
			<MainSearch companies={companies} />
		</MemoryRouter>
	);
	expect(getByText("Bauer-Gallagher")).toBeInTheDocument();
});

it("renders jobs passed to the list", () => {
	const { getByText } = render(
		<MemoryRouter>
			<MainSearch jobs={jobs} />
		</MemoryRouter>
	);
	expect(getByText("Conservator, furniture")).toBeInTheDocument();
});
