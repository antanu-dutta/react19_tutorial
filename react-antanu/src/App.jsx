export const App = () => {
  return (
    <div>
      <NetflixSeries />
      <NetflixSeries />
    </div>
  );
};

const NetflixSeries = () => {
  const name = "Queen Of Tears";
  const rating = "8.2";
  const summary = `Baek Hyun-woo and Hong Hae-in navigate a tense relationship,
        both at home and at work. But upon deciding his future, Hyun-woo pays a
        visit to his family.`;

  const returnGenre = () => {
    const genre = 'Romcom'
    return genre
  }

  return (
    <div>
      <div>
        <img src="1.jpg" alt="" width={"40%"} height={"40%"} />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating {rating}</h3>
      <p>Sumamry:{summary}</p>
      <p>Total Count : {2+8+2}</p>
      <p>Genre: {returnGenre()}</p>
    </div>
  );
};
