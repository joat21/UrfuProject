import styles from "./DescListItem.module.css";

const DescListItem = (props) => {
  let value = "";
  switch (props.dataKey) {
    case "Телефон":
      value = <a href={`tel:${props.value}`} className="link_phone">{props.value}</a>;
      break;
    case "Email":
      value = <a href={`mailto:${props.value}`} className={styles['link_email']}>{props.value}</a>;
      break;
    default:
      value = props.value;
  }

  return (
    <div className={styles['desc-list__item']}>
      <dt className={styles['data__key']}>{props.dataKey}</dt>
      <dd className={styles['data__value']}>{value}</dd>
    </div>
  );
}

export default DescListItem;
