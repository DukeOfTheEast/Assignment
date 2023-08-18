import Appdev from "../images/appdev.png";
import Cloud from "../images/cloud.png";
import Ux from "../images/ux.png";

const Features = () => {
  return (
    <div className="features">
      <h3 className="care">CARE FEATURES</h3>
      <h2>Awesome Service With Our Tools</h2>
      <div className="services">
        <div>
          <img src={Appdev} alt="" />
          <h3>App Development</h3>
          <p className="serv">
            Helping families live intelligently means we’re always working to
            bring our customers.
          </p>
        </div>
        <div>
          <img src={Cloud} alt="" />
          <h3>Cloud Storage</h3>
          <p className="serv">
            Helping families live intelligently means we’re always working to
            bring our customers.
          </p>
        </div>
        <div>
          <img src={Ux} alt="" />
          <h3>UX Planning</h3>
          <p className="serv">
            Helping families live intelligently means we’re always working to
            bring our customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
