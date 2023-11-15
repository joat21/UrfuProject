import { Form } from "react-bootstrap";
import Sidenav from "../../Components/Sidenav/Sidenav";
import CourseCard from "../../Components/CourseCard/CourseCard";

const CompletedCourses = () => {
  return (
    <div>
      <Sidenav />
      <div className="lk-container">
        <h1 className="lk-page__title completed-courses__title">Пройденные курсы</h1>
        <Form.Select>
          <option value="все семестры">Все семестры</option>
          <option value="1 семестр">1 семестр</option>
          <option value="2 семестр">2 семестр</option>
          <option value="3 семестр">3 семестр</option>
          <option value="4 семестр">4 семестр</option>
        </Form.Select>

        <ul className="list-reset courses-list">
          <li className="courses__item"><CourseCard /></li>
          <li className="courses__item"><CourseCard /></li>
          <li className="courses__item"><CourseCard /></li>
          <li className="courses__item"><CourseCard /></li>
          <li className="courses__item"><CourseCard /></li>
          <li className="courses__item"><CourseCard /></li>
          <li className="courses__item"><CourseCard /></li>
          <li className="courses__item"><CourseCard /></li>
          <li className="courses__item"><CourseCard /></li>
        </ul>
      </div>
    </div>
  );
}

export default CompletedCourses;
