import { Form } from "react-bootstrap";
import Sidenav from "../../Components/Sidenav/Sidenav";
import FinishedCoursesList from "../../Components/FinishedCoursesList";
import { useEffect, useState } from "react";

const FinishedCourses = () => {

  const [finishedCourses, setFinishedCourses] = useState([]);

  const setFinishedCoursesHandler = (data) => {
    setFinishedCourses(data);
  };

  useEffect(() => {
    fetch("http://localhost:5000/finishedCourses")
      .then(response => response.json())
      .then(data => setFinishedCoursesHandler(data))
  }, []);

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
        <FinishedCoursesList finishedCourses={finishedCourses}/>
      </div>
    </div>
  );
}

export default FinishedCourses;
