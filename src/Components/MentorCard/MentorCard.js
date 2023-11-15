import { Card } from "react-bootstrap";
import photo from "../../img/mentors/obabkov i.n.jpg";

const MentorCard = () => {
  return (
    <Card className="mentor-card">
      <Card.Body>
        <Card.Img variant="left" src={photo}/>
        <div className="card__content">
          <Card.Title className="full-name">Обабков Илья Николаевич</Card.Title>
          <Card.Subtitle className="post">Руководитель образовательной программы</Card.Subtitle>
          <div className="mentor__info">
            <ul className="list-reset data__keys">
              <li className="data__key">
                Адрес:
              </li>
              <li className="data__key">
                Аудитория:
              </li>
              <li className="data__key">
                Телефон:
              </li>
              <li className="data__key">
                Email:
              </li>
            </ul>
            <ul className="list-reset data__values">
              <li className="data__value">
                ул. Мира, 32
              </li>
              <li className="data__value">
                Р-332
              </li>
              <li className="data__value">
                +7 (343) 375-97-00
              </li>
              <li className="data__value">
                <a href="mailto:i.n.obabkov@urfu.ru">i.n.obabkov@urfu.ru</a>
              </li>
            </ul>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MentorCard;
