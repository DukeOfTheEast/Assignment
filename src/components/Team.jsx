import TeamA from "../images/team1.png";
import TeamB from "../images/team2.png";
import TeamC from "../images/team3.png";

const Team = () => {
  return (
    <div className="mainTeams">
      <p className="teamp">Meet Our Team</p>
      <h3>Experience Team Members</h3>
      <div className="teams">
        <div>
          <img src={TeamA} alt="" />
          <h5>Robert C. Simmons</h5>
          <p>Business Consultant</p>
        </div>
        <div>
          <img src={TeamB} alt="" />
          <h5>Christopher L. Wagner</h5>
          <p>Senior Manager</p>
        </div>
        <div>
          <img src={TeamC} alt="" />
          <h5>Lawrence C. Dickerson</h5>
          <p>Financial Consultant</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
