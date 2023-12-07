import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import FinishedCoursesList from "../../Components/FinishedCoursesList/FinishedCoursesList";
import PageTemplate from "../../Components/PageTemplate/PageTemplate";
import styles from "./FinishedCourses.module.css";

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
    <PageTemplate title={"Пройденные курсы"}>
      <Form.Select className={styles['form__select']}>
        <option value="все семестры">Все семестры</option>
        <option value="1 семестр">1 семестр</option>
        <option value="2 семестр">2 семестр</option>
        <option value="3 семестр">3 семестр</option>
        <option value="4 семестр">4 семестр</option>
      </Form.Select>
      <FinishedCoursesList finishedCourses={finishedCourses}/>
    </PageTemplate>
  );
}

export default FinishedCourses;
