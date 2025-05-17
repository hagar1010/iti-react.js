import { useState } from "react";
import Pie from "./Pie"
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
    const [random, setRandom] = useState({
        percentage: 0,
        color: movie.vote_average < 5 ? "red" : movie.vote_average > 6 ? "green" : "yellow"
    });
    return (
        <div>
            {/* <Link to={`/Movies/:${movie.id}`}> */}
                <div className="movie-card">
                    <div className="img-holder">
                        <Pie percentage={movie.vote_average} color={random.color} className="movie-rate" />
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </div>
                    <div className="text-box">
                        <br />
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <h5>{movie.release_date}</h5>
                    </div>
                </div>
            {/* </Link> */}
        </div>
    )
}

export default MovieItem