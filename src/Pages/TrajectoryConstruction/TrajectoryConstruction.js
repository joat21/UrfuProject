import PageTemplate from "../../Components/PageTemplate/PageTemplate";

const TrajectoryConstruction = () => {
  return (
    <PageTemplate title="Построение траектории">
      <div className="note">
        <h2 className="note__title">Примечание</h2>
        <p className="note__text">
          Данный раздел создан для автоматизации выбора вашей индивидуальной
          образовательной траектории. Перед началом работы в&nbsp;сервисе озакомьтесь с&nbsp;описаниями курсов
        </p>
      </div>

      <div className="courses-selection">
        <h2>Расставьте приоритет выбора курсов в рамках каждого предмета</h2>
      </div>

    </PageTemplate>
  );
}

export default TrajectoryConstruction;
