import Corporate from "../images/corporate.png";
import Facebook from "../images/fb.png";
import Instagram from "../images/insta.png";
import Twitter from "../images/twit.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerFirst">
        <img src={Corporate} alt="" />
        <p>2021 Award winning Vaccination and Lorems ipsum dolor sit amet</p>
        <div className="footerImg">
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="location">
        <h5>Location</h5>
        <a href="/">America</a>
        <a href="/">Asia</a>
        <a href="/">Europe</a>
        <a href="/">Africa</a>
      </div>
      <div className="contact">
        <h5>Contact</h5>
        <a href="/">About me</a>
        <a href="/">Teams</a>
        <a href="/">Teams</a>
        <a href="/">FAQ</a>
      </div>
      <div className="legals">
        <h5>Legals</h5>
        <a href="/">Privacy</a>
        <a href="/">Disclaimer</a>
        <a href="/">Terms</a>
        <a href="/">Company</a>
      </div>
    </div>
  );
};

export default Footer;
