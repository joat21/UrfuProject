import { Accordion } from "react-bootstrap";
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
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Алгоритмы и анализ сложности</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>course 1</li>
                <li>course 2</li>
                <li>course 3</li>
                <li>course 4</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Архитектура ЭВМ</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>course 1</li>
                <li>course 2</li>
                <li>course 3</li>
                <li>course 4</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Дискретная математика и математическая логика</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>course 1</li>
                <li>course 2</li>
                <li>course 3</li>
                <li>course 4</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Естественнонаучное мировоззрение</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>course 1</li>
                <li>course 2</li>
                <li>course 3</li>
                <li>course 4</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

    </PageTemplate>
  );
}

export default TrajectoryConstruction;
