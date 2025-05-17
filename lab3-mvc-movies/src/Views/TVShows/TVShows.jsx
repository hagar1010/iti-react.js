import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../reduxtk/slices/userSlice";
import { useEffect, useState } from "react";
import Pie from "../Movies/Pie"

const TVShows = () => {
  const dispatch = useDispatch()
  const { users, loading, error } = useSelector(state => state.users)


  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])



  const [random, setRandom] = useState("#ff0");

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <h2 className="title">TV Shows</h2>
      <div className="movies-container">
        {users.map((movie) => {
          return <div className="movie-card" key={movie.id}>
            <div className="img-holder">
              <Pie percentage={movie.vote_average} color={random} className="movie-rate" />
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="text-box">
              <br />
              <h2>{movie.name}</h2>
              <p>{movie.overview}</p>
              <h5>{movie.first_air_date}</h5>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default TVShows