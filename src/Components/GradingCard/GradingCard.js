import { Card } from "react-bootstrap";
import GradingBar from "../GradingBar/GradingBar";
import styles from "./GradingCard.module.css";

const GradingCard = (props) => {
  return (
    <Card className={styles.card}>
      <Card.Body className={styles.body}>
        <Card.Title className={styles.title}>Итоговый балл:</Card.Title>
        {/* <Card.Text>93/100</Card.Text> */}
        <GradingBar grade={props.grade}/>
      </Card.Body>
    </Card>
  );
}

export default GradingCard;
