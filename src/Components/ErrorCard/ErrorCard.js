import { Card } from "react-bootstrap";
import styles from "./ErrorCard.module.css";
import gear from "../../img/error/gear.svg";

const ErrorCard = () => {
  return (
    <Card className={styles.card}>
      <Card.Body className={styles.body}>
        <Card.Title className={styles.title}>У-упс!</Card.Title>
        <Card.Img className={styles.img} variant="middle" src={gear}/>
        <Card.Text className={styles.text}>
          <span>Что-то пошло не&nbsp;так.</span>
          <span>Попробуйте обновить страницу или повторить попытку позже</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ErrorCard;
