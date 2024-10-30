/* eslint-disable react/prop-types */
const SeriesCard = ({ curElem }) => {
  const { img_url, name, rating, description, watch_url } = curElem;
  return (
    <li>
      <div>
        <img src={img_url} alt={name} width={"40%"} height={"40%"} />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating {rating}</h3>
      <p>Sumamry:{description}</p>
      <p>Genre:</p>
      <a href={watch_url} target="_blank">
        Watch Now
      </a>
    </li>
  );
};

export default SeriesCard;
