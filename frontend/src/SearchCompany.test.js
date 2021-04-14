import React from "react";
import { render } from "@testing-library/react";
import SearchCompany from "./SearchCompany";
import { MemoryRouter } from "react-router";
import NavBar from "./routes-navbar/NavBar";

let currentUser = "testuser";

beforeEach(() => {
	currentUser;
});

afterEach(() => {
	currentUser = "";
});

it("renders without crashing", () => {
	render(
		<MemoryRouter>
			<NavBar currentUser={currentUser}>
				<SearchCompany />
			</NavBar>
		</MemoryRouter>
	);
});

it("matches snapshot", () => {
	const { asFragment } = render(
		<MemoryRouter>
			<NavBar currentUser={currentUser}>
				<SearchCompany />
			</NavBar>
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});
