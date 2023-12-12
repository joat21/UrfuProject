import CourseAddInfoItem from "../CourseAddInfoItem/CourseAddInfoItem";
import styles from "./CourseAddInfo.module.css";

const CourseAddInfo = (props) => {
  const course = props.course;
  return (
    <div className={styles['course__add-info']}>
      <div className={styles['code-hours__wrapper']}>
        <CourseAddInfoItem title={"Код"} content={course.code} />
        <CourseAddInfoItem title={"Ак. часы"} content={course.hours} />
      </div>
      <CourseAddInfoItem title={"Авторы"} content={course.authors} />
      <CourseAddInfoItem title={"Макс. кол-во обучающихся"} content={course.maxStudentsCount} />
    </div>
  );
}

export default CourseAddInfo;
