import MovieDesc from "../movieDescription/movieDescription";
import styles from "./movieCard.module.css";

const MovieCard = ({movies}) => {
    const movie = movies;
    return(
        <>
        <div className={styles.movie}>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
        <MovieDesc movies={movie} />
        </> 
         );
};
export default MovieCard;