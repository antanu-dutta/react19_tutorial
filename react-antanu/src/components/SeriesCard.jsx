/* eslint-disable react/prop-types */
const SeriesCard = ({ curElem }) => {
  const { img_url, name, rating, description, watch_url } = curElem;

  const myStyle = {
    padding: "10px 12px",
    marginTop: "10px",
  };

  return (
    <li className="card">
      <div>
        <img src={img_url} alt={name} style={{ width: "100%" }} />
      </div>
      <h2>Name: {name}</h2>
      <h3>
        Rating{" "}
        <span className={`rating ${rating >= 8.5 ? "super_hit" : "average"}`}>
          {rating}
        </span>
      </h3>
      <p style={{ margin: "1.2rem" }}>
        Sumamry:{description.slice(0, 15) + "..."}
      </p>
      <p>Genre:</p>
      <a href={watch_url} target="_blank">
        <button style={myStyle}>Watch Now</button>
      </a>
    </li>
  );
};

export default SeriesCard;
