import ErrorCard from "../../Components/ErrorCard/ErrorCard";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.error}>
      <ErrorCard />
    </div>
  );
}

export default Error;
