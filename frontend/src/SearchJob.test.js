import React from "react";
import { render } from "@testing-library/react";
import SearchJob from "./SearchJob";
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
				<SearchJob />
			</NavBar>
		</MemoryRouter>
	);
});

it("matches snapshot", () => {
	const { asFragment } = render(
		<MemoryRouter>
			<NavBar currentUser={currentUser}>
				<SearchJob />
			</NavBar>
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});
