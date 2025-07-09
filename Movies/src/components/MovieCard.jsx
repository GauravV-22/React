import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

const MovieCard = ({ movie }) => {

    return (
        <Link to={`/movie/${movie.id}`} state={{ movie }}>
            <div className = 'card'>
            <img src={movie.poster_path} alt={movie.original_title} />
            <p className = 'title'>{movie.original_title}</p>
            </div>
        </Link>
    )
    
}

export default MovieCard;
