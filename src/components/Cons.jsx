import Consult from "../images/consult.png";

const Cons = () => {
  return (
    <div className="cons">
      <img src={Consult} alt="" className="consImg" />
      <div className="consText">
        <h3 className="consH3">
          Get Free Consultations! We`re Ready To Work Together
        </h3>
        <button className="consBtn">Get Free Consultations</button>
      </div>
    </div>
  );
};

export default Cons;
