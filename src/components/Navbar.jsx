import corpLogo from "../images/corporate.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={corpLogo} alt="" />

      <div className="links">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Resources</a>
        <a href="/">Projects</a>
      </div>

      <button className="btnNav">Contact us today</button>
    </div>
  );
};

export default Navbar;
