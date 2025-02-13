import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
//import "../styles/demo.scss";

export const MovieDetails = props => {
	const { store, actions } = useContext(Context);
	const [movieDetails, setMovieDetails] = useState(null);

	useEffect(() => {
		//var moviesInStorage = localStorage.getItem("movieList");
		console.log("match.params.id", props.match);
		//if (!moviesInStorage) {
		fetch(`https://www.omdbapi.com/?apikey=aab1d9d2&i=${props.match.params.id}`, {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => {
				console.log("data", data);
				setMovieDetails(data);
			})
			.catch(err => {
				console.error(err);
			});
		//} else {
		//	var parsedMovies = JSON.parse(moviesInStorage);
		//	setPopularMovies([...parsedMovies]);
		//}
	}, []);

	return (
		<div className="container MovieDetails-container">
			<h1 className="pb-4">Movie Details</h1>
			<div className="card mb-3 bg-dark" style={{ maxWidth: "80vw" }}>
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
						<img src={props.location.state.poster} alt="" />
					</div>
					<div className="col-md-8">
						<h2>{props.location.state.movie.title}</h2>
						<p>{props.location.state.movie.year}</p>
						<p> Director </p>
						<p> RunTime </p>
						<p> Countries </p>
						
					</div>
				</div>
			</div>
			<div className="info" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<h1>Cast</h1>
					<div className="jumbotron mx-auto w-75 bg-dark d-block justify-content-between">
						<h1 className="display-4 text-warning">Trending Movies</h1>
					</div>
				</div>
				<div className="row g-0">
					<h1>Rating</h1>
					<div className="jumbotron mx-auto w-75 bg-dark d-block justify-content-between">
						<h1 className="display-4 text-warning">Trending Movies</h1>
					</div>
				</div>
				<div className="row g-0">
					<h1>Plot</h1>
					<div className="jumbotron mx-auto w-75 bg-dark d-block justify-content-between">
						<h1 className="display-4 text-warning">Trending Movies</h1>
					</div>
				</div>
			</div>
			<div className="row g-0">
				<h1>Writers</h1>
				<div className="jumbotron mx-auto w-75 bg-dark d-block justify-content-between">
					<h1 className="display-4 text-warning">Trending Movies</h1>
				</div>
			</div>
			<div className="row g-0">
				<h1>Production</h1>
				<div className="jumbotron mx-auto w-75 bg-dark d-block justify-content-between">
					<h1 className="display-4 text-warning">Trending Movies</h1>
				</div>
			</div>
		</div>
	);
};

MovieDetails.propTypes = {
	location: PropTypes.object,
	poster: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	boxOffice: PropTypes.string,
	plot: PropTypes.string,
	movie: PropTypes.object,
	imdbRating: PropTypes.string,
	
};
