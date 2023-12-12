import styles from "./CourseAddInfoItem.module.css";

const CourseAddInfoItem = (props) => {
  let content = props.content;

  if (Array.isArray(content)) {
    content =
      <ul className={`list-reset ${styles['content_list']}`}>
        {props.content.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
  } else {
    content = <span className={styles.content}>{props.content}</span>
  }

  return (
    <div className={styles['add-info__item']}>
      <span className={styles['item__title']}>{props.title}</span>
      {content}
    </div>
  );
}

export default CourseAddInfoItem;
