import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

//import "../styles/demo.scss";

export const MovieDetails = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container MovieDetails-container">
			Welcome To Movie Wizzard
			<div className="card mb-3" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={props.location.state.poster} alt="..." />
					</div>
					<div className="col-md-8">
						<div clasName="card-body">
							<h5 clasName="card-title">
								{props.location.state.movie}
								movie title
							</h5>
							<p className="card-text">
								{props.movie.year}
								year
							</p>
							<p className="card-text">
								{/* {props.imdbRating} */}
								rating
							</p>

							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="info" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<h1>Cast</h1>
					<div className="col-md-4" />
					<div className="col-md-8" />
				</div>
				<div className="row g-0">
					<h2>Trivia</h2>
					<div className="col-md-4" />
					<div className="col-md-8" />
				</div>
				<div className="row g-0">
					<h3>User Reviews</h3>
					<div className="col-md-4" />
					<div className="col-md-8" />
				</div>
				<div className="row g-0">
					<h4>IMDbPro</h4>
					<div className="col-md-4" />
					<div className="col-md-8" />
				</div>
				<div className="row g-0">
					<h5>More!!!</h5>
					<div className="col-md-4" />
					<div className="col-md-8" />
				</div>
			</div>
		</div>
	);
};

MovieDetails.propTypes = {
	poster: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	boxOffice: PropTypes.string,
	plot: PropTypes.string,
	movie: PropTypes.object,
	imdbRating: PropTypes.string,
	location: PropTypes.object
};
