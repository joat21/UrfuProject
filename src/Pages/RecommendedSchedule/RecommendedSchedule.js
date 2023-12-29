import { useEffect, useState } from "react";
import PageTemplate from "../../Components/PageTemplate/PageTemplate";
import styles from "./RecommendedSchedule.module.css";
import { Button } from "react-bootstrap";

const RecommendedSchedule = () => {
  return (
    <PageTemplate title='Рекомендуемое расписание'>
      <div className={styles.left}>
        <p className={styles.text}>
          К сожалению, ты еще не построил свою индивидуальную образовательную траекторию. Сделай это, чтобы получить результат.
        </p>
        <Button className={`btn-reset ${styles.btn}`}>Пройти тест</Button>
      </div>
    </PageTemplate>
  );
}

export default RecommendedSchedule;
