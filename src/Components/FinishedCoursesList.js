import CourseCard from "./CourseCard/CourseCard";

const FinishrdCoursesList = (props) => {
  return (
    <ul className="list-reset courses-list">
      {props.finishedCourses.map((finishedCourse) => (
        <li className="courses__item">
          <CourseCard course={finishedCourse}/>
        </li>
      ))};
    </ul>
  );
}

export default FinishrdCoursesList;
