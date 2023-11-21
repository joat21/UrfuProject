import { Card } from "react-bootstrap";

const CourseCard = (props) => {
  return (
    <Card className="course-card">
      <Card.Body>
        <Card.Title>
          <a href={props.course.link}>{props.course.name}</a>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
