import MentorCard from "../MentorCard/MentorCard";
import "./MentorsList.css";

const MentorsList = (props) => {
  return (
    <ul className="list-reset mentors-list">
      {props.mentors.map((mentor) => (
        <li className="mentors__item">
            <MentorCard mentor={mentor} />
        </li>
      ))}
    </ul>
  );
}

export default MentorsList;
