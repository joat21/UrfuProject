import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidenav from "../../Components/Sidenav/Sidenav";
import styles from "./CareerTest.module.css";

const CareerTest = () => {
  return (
    <>
      <Sidenav />
      <div className={`lk-container ${styles.container}`}>
        <h1 className={styles.title}>
          Пройдите тест и&nbsp;узнайте, какая IT-профессия вам подходит
        </h1>
        <p className={styles.desc}>
          Вашему вниманию предлагается тест на&nbsp;профориентацию в&nbsp;сфере IT.
          Тест представлен в&nbsp;виде нескольких вопросов, связанных с&nbsp;возможными интересами тестируемого в&nbsp;сфере&nbsp;IT.
        </p>
        <Button href='/career-test-questions' className={`btn-reset ${styles.btn}`}>
          Пройти тест
        </Button>
        <Link className={styles['skip-link']}>Пропустить тест</Link>
      </div>
    </>
  );
}

export default CareerTest;
