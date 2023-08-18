import Line from "../images/Line.png";

const Subscribe = () => {
  return (
    <div>
      <div className="subscribe">
        <div className="subscribeText">
          <h2>Subscribe To Our Newsletter For Weekly Article Update</h2>
          <p>
            Passages of lorem ipsum available but the majority have suffered
            alteration by injected words
          </p>
        </div>
        <img src={Line} alt="" />
        <button className="btn5">Get Started</button>
      </div>
    </div>
  );
};

export default Subscribe;
