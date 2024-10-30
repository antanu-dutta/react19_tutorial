import NetflixSeries from "./components/NetfliexSeries";
import "./components/Netflix.css";

export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">List of Marvel Studios Movies</h1>
      <NetflixSeries />
    </section>
  );
};
