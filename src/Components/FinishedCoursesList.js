import CourseCard from "./CourseCard/CourseCard";

const FinishrdCoursesList = (props) => {
  return (
    <div>
      <ul className="list-reset courses-list">
        {props.finishedCourses.map((finishedCourse) => (
          <li className="courses__item">
            <CourseCard course={finishedCourse}/>
          </li>
        ))};
      </ul>
    </div>
  );
}

export default FinishrdCoursesList;
