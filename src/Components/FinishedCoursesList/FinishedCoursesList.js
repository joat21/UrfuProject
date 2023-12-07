import CourseCard from "../CourseCard/CourseCard";
import styles from "./FinishedCoursesList.module.css";

const FinishrdCoursesList = (props) => {
  return (
    <ul className={`list-reset ${styles['courses-list']}`}>
      {props.finishedCourses.map((finishedCourse) => (
        <li key={finishedCourse.code} className="courses__item">
          <CourseCard
            finished={true}
            course={finishedCourse}
          />
        </li>
      ))};
    </ul>
  );
}

export default FinishrdCoursesList;
