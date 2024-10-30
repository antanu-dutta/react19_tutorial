import movies from "../api/movies.json";

const NetflixSeries = () => {
  return (
    <ul>
      {movies.map((curElem) => (
        <li key={curElem.id}>
          <div>
            <img
              src={curElem.img_url}
              alt={curElem.name}
              width={"40%"}
              height={"40%"}
            />
          </div>
          <h2>Name: {curElem.name}</h2>
          <h3>Rating {curElem.rating}</h3>
          <p>Sumamry:{curElem.description}</p>
          <p>Genre:</p>
          <a href={curElem.watch_url} target="_blank">
            Watch Now
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NetflixSeries;