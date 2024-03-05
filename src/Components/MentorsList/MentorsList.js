import MentorCard from "../MentorCard/MentorCard";
import styles from "./MentorsList.module.css";

const MentorsList = (props) => {
  return (
    <ul className={`list-reset ${styles.list}`}>
      {props.mentors.map((mentor) => (
        <li key={mentor.id} className={styles.item}>
            <MentorCard mentor={mentor} />
        </li>
      ))}
    </ul>
  );
}

export default MentorsList;
