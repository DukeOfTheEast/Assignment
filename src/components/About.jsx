import AboutOne from "../images/about1.png";
import AboutTwo from "../images/about2.png";

const About = () => {
  return (
    <div className="about">
      <div className="aboutImg">
        <img src={AboutOne} alt="" className="img1" />
        <img src={AboutTwo} alt="" className="img2" />
      </div>
      <div>
        <p className="abt">About</p>
        <h2 className="influence">Influencer Marketing For Your Business</h2>
        <p className="influencep">
          With over 25 years of experience, we have crafted thousands of
          Strategic discovery process that enables us to peel back the Layers
          which enable us to understand, connect, represent and Dominate your
          market.
        </p>
        <button className="btn3">Phone number: +002698 22 33</button>
      </div>
    </div>
  );
};

export default About;
