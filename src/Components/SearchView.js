import Hero from "./Hero";
import { Link } from 'react-router-dom'



const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`
  const missingImgUrl = `https://theheizenbergeffect.files.wordpress.com/2012/06/walt_missing_poster.jpg`
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 my-5">
    <div className="card">
      {movie.poster_path !== null ? <img src={posterUrl} className="card-img-top" alt="..." /> 
        : <img src={missingImgUrl} className="card-img-top" alt="..." /> }
      
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        {/* <p className="card-text">{movie.overview}</p> */}
        <Link to={detailUrl} className="btn btn-primary" >Details</Link>
      </div>
    </div>
  </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for... ${keyword}`;

  const resultsHtml = searchResults.map((object, index) => {
    return <MovieCard movie={object} key={index} />;
  });

  return (
    <>
      <Hero text={title} />
      {resultsHtml &&
      <div className="container">
        <div className="row">
          {resultsHtml}
        </div>
      </div>
      }
    </>
  );
};

export default SearchView;
