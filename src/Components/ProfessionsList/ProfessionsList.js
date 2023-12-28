import ProfessionCard from "../ProfessionCard/ProfessionCard";
import styles from "./ProfessionsList.module.css";

const ProfessionsList = (props) => {
  return (
    <ul className={`list-reset ${styles.list}`}>
      {props.professions.map((profession) => (
        <li key={profession.id} className={styles.item}>
          <ProfessionCard profession={profession} />
        </li>
      ))}
    </ul>
  );
}

export default ProfessionsList;
