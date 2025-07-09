import '../css/movies.css'
import { useLocation } from 'react-router-dom'

const MovieDetails = () => {

    const { state } = useLocation();
    const movie = state?.movie;

    console.log(movie)

    return (  
<>
        <div className="backdrop" style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
            <div className="backdropOverlay"></div>
            <div className="container">
                <div className="details">
                    <img id="poster" src={movie.poster_path} alt={movie.original_title}/>
                    <div className="text">
                        <h1 id="title">{movie.original_title}</h1>
                        <p id="lang">{movie.original_language}</p>
                        <p id="rating">{movie.vote_average},      {movie.vote_count}</p>
                        <p id="released">Release Date: {movie.release_date}</p>
                        <p id="overview">{movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="castSection">
                <h2>Cast</h2>
                <div className="castList">
                    {movie.casts?.map((cast) => (
                        <div key={cast.id} className="castCard">
                        <img src={cast.profile_path} alt={cast.name} />
                        <p>{cast.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
</>
    )
    }

export default MovieDetails;
