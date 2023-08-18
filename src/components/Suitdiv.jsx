import Suit from "../images/suitman.png";

const Suitdiv = () => {
  return (
    <div className="suit">
      <div>
        <h1 className="consult">
          Our <span className="suitspan">consultation</span> is always in sync
          with your strategy
        </h1>
        <p className="latin">
          Scelerisque dignissim in leo at magna donec mi metus ipsum luctus nam
          elit sociis luctus et aliquam libero.
        </p>
        <button className="btn2">Our Services</button>
      </div>
      <img src={Suit} alt="" className="suitman" />
    </div>
  );
};

export default Suitdiv;
