import Techone from "../images/tech1.png";
import Techtwo from "../images/tech2.png";

const Analysis = () => {
  return (
    <div className="analysis">
      <p className="our">Our Services</p>
      <h2 className="amaze">Amazing Business Services</h2>
      <div className="techs">
        <div className="tech">
          <img src={Techone} alt="" />
          <div className="anal">
            <h2>Technical Analysis</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable. If you are going
            </p>
          </div>
        </div>
        <div className="tech">
          <img src={Techtwo} alt="" />
          <div className="anal">
            <h2>Technical Analysis</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable. If you are going
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
