import CourseCard from "../CourseCard/CourseCard";
import styles from "./FinishedCoursesList.module.css";

const FinishrdCoursesList = (props) => {
  return (
    <ul className={`list-reset ${styles.list}`}>
      {props.finishedCourses.map((finishedCourse) => (
        <li key={finishedCourse.id}>
          <CourseCard
            finished={true}
            course={finishedCourse}
          />
        </li>
      ))}
    </ul>
  );
}

export default FinishrdCoursesList;
