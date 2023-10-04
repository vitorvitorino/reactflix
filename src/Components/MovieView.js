import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams()

  const [movieDetails, setMovieDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=87b5d035fafbbeedf5aa84b05be21f92&language=en-US`)
    .then((response) => response.json())    
    .then((data) => { 
        console.log(`This is the API Response: ${data}`)
        setMovieDetails(data)
        setIsLoading(false)
      }
    )
  }, [id])

    function renderMovieDetails() {
      if(isLoading) {
        return <Hero text='Loading...' />
      }
      if(movieDetails) {
        const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        const missingImgUrl = `https://theheizenbergeffect.files.wordpress.com/2012/06/walt_missing_poster.jpg`
        const imdbLink = `https://www.imdb.com/title/${movieDetails.imdb_id}`
        const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
        return (

          <>

          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className='row'>
              <div className="col-md-3">
                {movieDetails.poster_path !== null ? 
                <img src={posterPath} alt={posterPath} className="img-fluid shadow rounded" />
                : <img src={missingImgUrl} alt={missingImgUrl} className="img-fluid shadow rounded" />
                }
              </div>
              <div className="col-lg-9">
                <h2>{movieDetails.original_title}</h2>
                  <p>{movieDetails.overview}</p>
                  <p>Average score: {movieDetails.vote_average.toFixed(1)} in {movieDetails.vote_count} votes</p>
                  <a href={imdbLink} target='_blank' rel="noopener noreferrer">IMDB Page</a>
              </div>
              
            </div>

          </div>

          </>
        )
      }
    }

    return renderMovieDetails()
  };
  
export default MovieView;
