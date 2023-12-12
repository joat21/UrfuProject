import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import FinishedCoursesList from "../../Components/FinishedCoursesList/FinishedCoursesList";
import PageTemplate from "../../Components/PageTemplate/PageTemplate";
import styles from "./FinishedCourses.module.css";

const FinishedCourses = () => {
  const [finishedCourses, setFinishedCourses] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/joat21/UrfuProject/finishedCourses")
      .then(response => response.json())
      .then(data => setFinishedCourses(data))
  }, []);

  return (
    <PageTemplate title={"Пройденные курсы"}>
      <Form.Select name="semester-select" className={styles['form__select']}>
        <option className={styles['form__option']} value="все семестры">Все семестры</option>
        <option className={styles['form__option']} value="1 семестр">1 семестр</option>
        <option className={styles['form__option']} value="2 семестр">2 семестр</option>
        <option className={styles['form__option']} value="3 семестр">3 семестр</option>
        <option className={styles['form__option']} value="4 семестр">4 семестр</option>
      </Form.Select>
      <FinishedCoursesList finishedCourses={finishedCourses}/>
    </PageTemplate>
  );
}

export default FinishedCourses;
