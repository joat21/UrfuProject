import { Card } from "react-bootstrap";
import photo from "../../img/mentors/obabkov i.n.jpg";
import DescList from "../DescList/DescList";
import MentorDesc from "../MentorDesc/MentorDesc";
import styles from "./MentorCard.module.css";

const MentorCard = (props) => {
  const mentor = props.mentor;
  const length = Object.keys(mentor).length;
  // const splicedKeys = keys.splice(3, keys.length - 1);

  const mentorData = Object.fromEntries(Object.entries(mentor).slice(4, length));

  return (
    <Card className={styles['mentor-card']}>
      <Card.Body className={styles['card-body']}>
        <Card.Img className={styles['mentor-card__photo']} variant="left" src={mentor.photo} alt={`Фото ${mentor["Имя"]}`}/>
        <div className={styles['card__content']}>
          <Card.Title className={styles['mentor__name']}>{mentor["Имя"]}</Card.Title>
          <Card.Subtitle className={styles.post}>{mentor["Должность"]}</Card.Subtitle>
          <DescList data={mentorData}/>
          {/* <MentorDesc
            id={mentor["id"]}
            mentorDesc={mentor}
          /> */}
          {/* <div className="mentor__info">
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
                {props.address}
              </li>
              <li className="data__value">
                {props.audience}
              </li>
              <li className="data__value">
                {props.phone}
              </li>
              <li className="data__value">
                <a href={`mailto:${props.email}`}>{props.email}</a>
              </li>
            </ul>
          </div> */}
        </div>
      </Card.Body>
    </Card>
  );
}

export default MentorCard;
