import movies from "../api/movies.json";
import SeriesCard from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three-cols">
      {movies.map((curElem) => (
        <SeriesCard key={curElem.id} curElem={curElem} />
      ))}
    </ul>
  );
};

export default NetflixSeries;
