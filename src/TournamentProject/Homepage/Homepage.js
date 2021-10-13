import classes from "./Homepage.module.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className={classes.Body}>
      <Link to="/TournamentsPage">
        <button className={classes.TournamentsButton}>Tournaments</button>
      </Link>

      <Link to="/Standings">
        <button className={classes.StandingsButton}>Standings</button>
      </Link>
    </div>
  );
};

export default Homepage;
