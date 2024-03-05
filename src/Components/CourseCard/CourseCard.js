import { Card } from "react-bootstrap";
import styles from "./CourseCard.module.css";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  const bg = `linear-gradient(90deg, #D3D7D6 0.1%, #D3D7D6 31.59%, rgba(211, 215, 214, 0.86) 65.37%, rgba(211, 215, 214, 0.00) 99.87%),
              url('${props.course.bg}') no-repeat center / cover`;

  return (
    <Card className={styles.card} style={{ background: bg }}>
      <Card.Body className={styles.body}>
        <Card.Title className={styles.title}>
          <Link to={`/finished-courses/${props.course.id}`} state={props.course} className={styles.link}>
            {props.course.name}
          </Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
