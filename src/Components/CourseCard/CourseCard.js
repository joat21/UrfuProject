import { Card } from "react-bootstrap";
import styles from "./CourseCard.module.css";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  return (
    <Card className={styles['course-card']}>
      <Card.Body className={styles['card__body']}>
        <Card.Title className={styles['card__title']}>
          <Link to={"/finished-course"} state={props.course.name} className={styles['card__link']}>{props.course.name}</Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
