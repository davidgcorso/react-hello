import React from "react";

const Jumbotron = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="jumbotron bg-secondary p-5 bg-opacity-10">
					<h1 className="display-4">
						<h1>A Warm Welcome!</h1>
					</h1>
					<p className="lead">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Perspiciatis quidem impedit nam, officiis
						cupiditate reprehenderit deleniti incidunt ea in
						veritatis laudantium iure commodi dolor accusantium
						nobis labore, placeat harum temporibus.
					</p>
					<p className="lead">
						<a
							className="btn btn-primary btn-lg"
							href="#"
							role="button">
							Call to action!
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Jumbotron;
