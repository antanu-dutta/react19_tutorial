import countryData from "../api/countryData.json";

const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts <br />
        we&apos;re proud of
      </h2>

      <div className="gradient-cards">
        {countryData.map((curElem) => (
          <div className="card" key={curElem.id}>
            <div className="container-card bg-blue-box">
              <p className="card-title">{curElem.countryName}</p>
              <p>
                <span className="card-description">
                  Capital: {curElem.capital}
                </span>
              </p>
              <p>
                <span className="card-description">
                  Population: {curElem.population}
                </span>
              </p>
              <p>
                <span className="card-description">
                  Interesting Fact: {curElem.interestingFact}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
