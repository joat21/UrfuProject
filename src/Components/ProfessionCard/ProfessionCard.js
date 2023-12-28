import { Button, Card } from "react-bootstrap";
import styles from "./ProfessionCard.module.css";

const ProfessionCard = (props) => {
  return (
    <Card className={`${styles.card}`}>
      <Card.Body className={styles.body}>
        <div className={styles['top']}>
          <Card.Title className={styles.title}>{props.profession.title}</Card.Title>
        </div>
        <div className={styles['bottom']}>
          <Button className={`btn-reset ${styles.btn}`}>Посмотреть</Button>
          <Card.Text className={styles.text}>{`Пройден: ${props.profession.testDate}`}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProfessionCard;
