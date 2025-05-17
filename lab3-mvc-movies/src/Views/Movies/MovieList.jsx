import { useEffect, useState } from "react"
import MovieController from "../../Contorollers/MovieController"
import MovieItem from "./MovieItem"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)


    useEffect(() => {
        MovieController.fetchMovies(currentPage)
            .then(({movies, totalPages}) => {
                setMovies(movies)
                setTotalPages(50)//
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [currentPage])


    // navigate btns (next & perv) in pages 
    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page)
            window.scrollTo(0, 0)
        }
    }
    // only show a few page buttons near the current page
    const generatePageNumbers = () => {
        const delta = 1
        const range = []
        for (let i = Math.max(1, currentPage - delta); i <= Math.min(totalPages, currentPage + delta); i++) {
            range.push(i)
        }
        if (currentPage - delta > 2) range.unshift("...")
        if (currentPage + delta < totalPages - 1) range.push("...")
        if (!range.includes(1)) {
            range.unshift(1)
        }
        if (!range.includes(totalPages)) {
            range.push(totalPages)
        }
        return range
    }


    if (loading) return <p>Loading...</p>
    if (error) return <p style={{ color: 'red' }}>{error}</p>


    return (
        <section>
            <h2 className="title">The Popular Movies</h2>
            <div className="movies-container">
                {
                    movies.map((movie) => {
                        return <MovieItem key={movie.id} movie={movie} />
                    })}
            </div>
            <div className="pagination">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <FaAngleLeft />
                </button>
                {
                    generatePageNumbers().map((page, index) =>
                        page === "..." ? (
                            <span key={index} className="dots">...</span>
                        ) : (
                            <p
                                key={index}
                                className={page === currentPage ? "active" : ""}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </p>
                        )
                    )}
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    <FaAngleRight />
                </button>
            </div>
        </section>
    )
}
export default MovieList