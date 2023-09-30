import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="p-3 d-flex justify-content-end">
			<Link to="/">
				<span className="btn btn-warning me-3" href="#" role="button">
					Contact
				</span>
			</Link>
			<Link to="/add-contact">
				<button className="btn btn-success">Add New Contact</button>
			</Link>
		</div>
	);
};
