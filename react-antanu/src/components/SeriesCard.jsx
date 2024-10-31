import styles from "../components/Netflix.module.css";
import styled from "styled-components";

/* eslint-disable react/prop-types */
const SeriesCard = ({ curElem }) => {
  const { img_url, name, rating, description, watch_url, genre } = curElem; // ? Props

  const Button = styled.button`
    padding: 10px 12px;
    margin-top: 10px;
    border: none;
    cursor: pointer;
    background-color: ${({ rating }) =>
      rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
  `;

  console.log(styles);

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} style={{ width: "100%" }} />
      </div>
      <h2 className="text-red-900 my-4 text-3xl">Name: {name}</h2>
      <h3>
        Rating{" "}
        <span
          className={`${styles.rating} ${
            rating >= 8.5 ? `${styles["super_hit"]}` : `${styles["average"]}`
          }`}
        >
          {rating}
        </span>
      </h3>
      <p style={{ marginBlock: "1.2rem" }}>
        Sumamry:{description.slice(0, 15) + "..."}
      </p>
      <p>
        Genre:
        {genre.map((curElem, index) => (
          <span key={index}> {curElem}, </span>
        ))}
      </p>
      <a href={watch_url} target="_blank">
        <Button rating={rating}>Watch Now</Button>
      </a>
    </li>
  );
};

export default SeriesCard;
