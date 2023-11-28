import MentorDescItem from "../MentorDescItem/MentorDescItem";
import "./MentorDesc.css";

const MentorDesc = (props) => {
  const keys = Object.keys(props.mentorDesc);
  const splicedKeys = keys.splice(3, keys.length - 1);

  return (
    <dl className="mentor__info">
      {splicedKeys.map((key) => (
        <MentorDescItem
          key={Math.random()}
          dt={key}
          dd={props.mentorDesc[key]}
        />
      ))}
    </dl>
  );
}

export default MentorDesc;
