import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container">
				<div className="col-md-10">
					<a className="navbar-brand text-white" href="#">
						Start Bootstrap
					</a>
				</div>
				<ul className="navbar-nav">
					<li className="nav-item">
						<a
							className="nav-link active text-white"
							aria-current="page"
							href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-white" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-white" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-white" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
