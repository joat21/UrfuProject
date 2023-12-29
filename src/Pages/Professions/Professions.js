import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import PageTemplate from "../../Components/PageTemplate/PageTemplate";
import ProfessionsList from "../../Components/ProfessionsList/ProfessionsList";
import styles from "./Professions.module.css";

const Professions = () => {
  const [professions, setProfessions] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/joat21/UrfuProject/professions")
      .then(response => response.json())
      .then(data => setProfessions(data));
  }, []);

  return (
    <PageTemplate title='Профессии'>
      <div className={styles.wrapper}>
        <Form.Select name="projession-select" className={styles['form__select']} size="sm">
          <option className={styles['form__option']} value="все">Все</option>
          <option className={styles['form__option']} value="1 семестр">Специалист по&nbsp;Data Science &amp;&nbsp;Machine Learning</option>
          <option className={styles['form__option']} value="2 семестр">Разработчик</option>
          <option className={styles['form__option']} value="3 семестр">Аналитик</option>
          <option className={styles['form__option']} value="4 семестр">Менеджер и&nbsp;руководитель</option>
          <option className={styles['form__option']} value="3 семестр">Администратор</option>
          <option className={styles['form__option']} value="3 семестр">Тестировщик</option>
          <option className={styles['form__option']} value="3 семестр">Gamedev</option>
          <option className={styles['form__option']} value="3 семестр">Информационная безопасность</option>
        </Form.Select>
        <ProfessionsList professions={professions}/>
      </div>
    </PageTemplate>
  );
}

export default Professions;
