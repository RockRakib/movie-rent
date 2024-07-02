import { getAllMovies } from "../data/movies";
import CineCard from "./CineCard";

const CineRental = () => {
  const movies = getAllMovies();
  return (
    <div>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <CineCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CineRental;
