import React, { useEffect, useState } from 'react'
import "./movieList.css"
import { Link } from 'react-router-dom'


// hooks declared with useState
export const MovieList = () => {
    const [movies, setMovies] = useState([])


// useEffect pick up info from api and post in the return
useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=3812b9925d12c2723ac148f3607b8bb5&language=en-US&page=1')
        .then((res) => res.json())
        .then((json) => {
            setMovies(json.results)
        })
}, [])

function goBack() {
    window.history.back();
  }

    return (
        // placeholders for all the movies that are beeing mapped 
        <div className="movieContainer">
            {movies.map((movie) => (
                <div className="moviePoster" key={movie.id}>

                    {/* Link is navigating to chosen movie with props that are shown when hover */}
                    <Link to={`/movies/${movie.id}`}>
                        <div className="titleRelease">
                            <h1>{movie.original_title}</h1>
                            <p>Released {movie.release_date}</p>
                        </div>
                    
                        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />  
                    </Link>
                </div>
            ))}
        </div>
    )
}

