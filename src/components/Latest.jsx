import LatestOne from "../images/latest1.png";
import LatestTwo from "../images/latest2.png";
import LatestThree from "../images/latest3.png";
import LatestFour from "../images/latest4.png";

const Latest = () => {
  return (
    <div className="latest">
      <p className="lat">Latest Projects & Case</p>
      <h5 className="let">Let`s Look Into Our Global Projects</h5>
      <div className="latestTechs">
        <div className="latestTech">
          <img src={LatestOne} alt="" />
          <div className="latestTag">
            <h2>Technical Analysis</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have
            </p>
          </div>
        </div>
        <div className="latestTech">
          <img src={LatestTwo} alt="" />
          <div className="latestTag">
            <h2>Technical Analysis</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have
            </p>
          </div>
        </div>
        <div className="latestTech">
          <img src={LatestThree} alt="" />
          <div className="latestTag">
            <h2>Technical Analysis</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have
            </p>
          </div>
        </div>
        <div className="latestTech">
          <img src={LatestFour} alt="" />
          <div className="latestTag">
            <h2>Technical Analysis</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
