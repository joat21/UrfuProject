import { Card } from "react-bootstrap";

const CourseCard = () => {
  return (
    <Card className="course-card">
      <Card.Body>
        <Card.Title>
          <a href="#">Веб-технологии и верстка (Смешанный курс, SkillBox)</a>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
