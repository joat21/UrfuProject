import { useLocation } from "react-router";
import PageTemplate from "../../Components/PageTemplate/PageTemplate";
import GradingCard from "../../Components/GradingCard/GradingCard";
import TextSection from "../../Components/TextSection/TextSection";
import CourseAddInfo from "../../Components/CourseAddInfo/CourseAddInfo";
import styles from "./FinishedCourse.module.css";

const FinishedCourse = () => {
  const course = useLocation().state;

  return (
    <PageTemplate title={`${course.code} ${course.name}`} isReturnButtonVisible={false}>
      <div className={styles.container}>
        <div className={styles['course__desc']}>
          <section className={styles['grading']}>
            <GradingCard grade={course.grade}/>

            <ul className={`${styles['grading__list']} list-reset`}>
              <li className={styles['grading__item']}>
                <span className={styles['item__text']}>
                  <span className={styles['item__text_bold']}>Бальная</span> шкала оценивания
                </span>
              </li>
              <li className={styles['grading__item']}>
                <span className={styles['item__text']}>
                  Максимальное количество баллов&nbsp;&mdash; <span className={styles['item__text_bold']}>100</span>
                </span>
              </li>
              <li className={styles['grading__item']}>
                <span className={styles['item__text']}>
                  Количество предметов контроля&nbsp;&mdash; <span className={styles['item__text_bold']}>33</span>
                </span>
              </li>
              <li className={styles['grading__item']}>
                <span className={styles['item__text']}>
                  Итоговый проект&nbsp;&mdash; <span className={styles['item__text_bold']}>эссе</span>
                </span>
              </li>
            </ul>
          </section>

          <TextSection className={styles.annotation} title="Аннотация" text={course.annotation}/>
          <TextSection title="Образовательный результат" text={course.result}/>
        </div>
        <CourseAddInfo course={course} />
      </div>
    </PageTemplate>
  );
}

export default FinishedCourse;
