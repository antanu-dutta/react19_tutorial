/* eslint-disable react/prop-types */
const SeriesCard = ({ curElem }) => {
  const { img_url, name, rating, description, watch_url } = curElem;

  return (
    <li className="card">
      <div>
        <img src={img_url} alt={name} style={{ width: "100%" }} />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating {rating}</h3>
      <p style={{ margin: "1.2rem" }}>
        Sumamry:{description.slice(0, 15) + "..."}
      </p>
      <p>Genre:</p>
      <a href={watch_url} target="_blank">
        Watch Now
      </a>
    </li>
  );
};

export default SeriesCard;
