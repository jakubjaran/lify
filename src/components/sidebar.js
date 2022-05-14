import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import { AiFillHome, AiFillFileText } from "react-icons/ai";
import { IoStatsChartSharp, IoPeopleSharp } from "react-icons/io5";
import { BsCalendar2EventFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.logo}>lify</h1>
      <Link to="/" className={styles.link}>
        <AiFillHome />
        <span>Home</span>
      </Link>
      <Link to="/stats" className={styles.link}>
        <IoStatsChartSharp />
        <span>Stats</span>
      </Link>
      <Link to="/people" className={styles.link}>
        <IoPeopleSharp />
        <span>People</span>
      </Link>
      <Link to="/notes" className={styles.link}>
        <AiFillFileText />
        <span>Notes</span>
      </Link>
      <Link to="/events" className={styles.link}>
        <BsCalendar2EventFill />
        <span>Events</span>
      </Link>
    </div>
  );
};

export default Sidebar;
