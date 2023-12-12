import { useLocation } from "react-router";
import { Card } from "react-bootstrap";
import PageTemplate from "../../Components/PageTemplate/PageTemplate";
import TextSection from "../../Components/TextSection/TextSection";
import styles from "./FinishedCourse.module.css";

const FinishedCourse = () => {
  const course = useLocation().state;

  return (
    <PageTemplate title={`${course.code} ${course.name}`} isReturnButtonVisible={false}>
      <div className={styles.container}>
        <div className={styles['course__desc']}>
          <section className={styles['grading']}>
            <Card className={styles['grading__card']}>
              <Card.Body>
                <Card.Title>Итоговый балл:</Card.Title>
                <Card.Text>93/100</Card.Text>
              </Card.Body>
            </Card>

            <ul className={`${styles['grading__list']} list-reset`}>
              <li className={styles['grading__item']}>
                Бальная шкала оценивания
              </li>
              <li className={styles['grading__item']}>
                Максимальное количество баллов&nbsp;&mdash; 100
              </li>
              <li className={styles['grading__item']}>
                Количество предметов контроля&nbsp;&mdash; 33
              </li>
              <li className={styles['grading__item']}>
                Итоговый проект&nbsp;&mdash; эссе
              </li>
            </ul>
          </section>

          <TextSection className={styles.annotation} title="Аннотация" text={course.annotation}/>
          <TextSection title="Образовательный результат" text={course.result}/>
        </div>
        <div className={styles['course__add-info']}>
          <div className={styles['code-hours__wrapper']}>
            <div className={styles['add-info__item']}>
              <span className={styles['item__title']}>Код</span>
              <span>{course.code}</span>
            </div>
            <div className={styles['add-info__item']}>
              <span className={styles['item__title']}>Ак.&nbsp;часы</span>
              <span>{course.hours}</span>
            </div>
          </div>
          <div className={styles['add-info__item']}>
            <span className={styles['item__title']}>Авторы</span>
            <ul className="list-reset">
              {course.authors.map(author => (
                <li>{author}</li>
              ))}
            </ul>
          </div>
          <div className={styles['add-info__item']}>
            <span className={styles['item__title']}>Макс. кол-во обучающихся</span>
            <span>{course.maxStudentsCount}</span>
          </div>

        </div>
      </div>
    </PageTemplate>
  );
}

export default FinishedCourse;
