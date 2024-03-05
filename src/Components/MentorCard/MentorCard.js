import { Card } from "react-bootstrap";
import DescList from "../DescList/DescList";
import styles from "./MentorCard.module.css";

const MentorCard = ({ mentor }) => {

  const length = Object.keys(mentor).length;
  const mentorData = Object.fromEntries(Object.entries(mentor).slice(4, length));

  return (
    <Card className={styles.card}>
      <Card.Body className={styles.body}>
        <Card.Img className={styles.photo} variant="left" src={mentor.photo} alt={`Фото ${mentor["Имя"]}`} />
        <div className={styles.content}>
          <Card.Title className={styles.name}>{mentor["Имя"]}</Card.Title>
          <Card.Subtitle className={styles.post}>{mentor["Должность"]}</Card.Subtitle>
          <DescList data={mentorData} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default MentorCard;
