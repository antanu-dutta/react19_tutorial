import styles from "../components/Netflix.module.css";
import styled from "styled-components";

/* eslint-disable react/prop-types */
const SeriesCard = ({ curElem }) => {
  const { img_url, name, rating, description, watch_url } = curElem; // ? Props

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
      <h2>Name: {name}</h2>
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
      <p style={{ margin: "1.2rem" }}>
        Sumamry:{description.slice(0, 15) + "..."}
      </p>
      <p>Genre:</p>
      <a href={watch_url} target="_blank">
        <Button rating={rating}>Watch Now</Button>
        {/* <button style={myStyle}>Watch Now</button> */}
      </a>
    </li>
  );
};

export default SeriesCard;
