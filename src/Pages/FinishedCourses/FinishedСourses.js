import { Form } from "react-bootstrap";
import Sidenav from "../../Components/Sidenav/Sidenav";
import FinishedCoursesList from "../../Components/FinishedCoursesList";

const FinishedCourses = () => {

  const finishedCourses = [
    {
      name: "Веб-технологии и верстка (Смешанный курс, SkillBox)",
      link: "#"
    },
    {
      name: "Анализ данных и искусственный интеллект (онлайн, ИТМО, ОК)",
      link: "#"
    },
    {
      name: "Основные концепции биологии и экологии",
      link: "#"
    },
    {
      name: "Эффективные коммуникации (онлайн, УрФУ, ОК)",
      link: "#"
    },
    {
      name: "Теория вероятности и математическая статистика",
      link: "#"
    },
    {
      name: "Проектирование и реализация баз данных (Онлайн, ИТМО, ОК)",
      link: "#"
    },
    {
      name: "Баскетбол",
      link: "#"
    },
    {
      name: "Технологии программирования",
      link: "#"
    },
    {
      name: "Математика. Базовый уровень.",
      link: "#"
    }
  ];

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
