import "./MentorDescItem.css";

const MentorDescItem = (props) => {
  let dd = "";
  switch (props.dt) {
    case "Телефон":
      dd = <a href={`tel:${props.dd}`} className="link_phone">{props.dd}</a>;
      break;
    case "Email":
      dd = <a href={`mailto:${props.dd}`} className="link_email">{props.dd}</a>;
      break;
    default:
      dd = props.dd;
  }


  return (
    <div className="desc__item">
      <dt className="data__key">{props.dt}</dt>
      <dd className="data__value">{dd}</dd>
    </div>
  );
}

export default MentorDescItem;
