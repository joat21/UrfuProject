import { Accordion, Button } from "react-bootstrap";
import PageTemplate from "../../Components/PageTemplate/PageTemplate";
import DonutChartWithLegend from "../../Components/DonutChartWithLegend/DonutChartWithLegend";
import styles from "./CareerTestInterimResult.module.css";

// значения для диаграммы из макета
const data = [
  { name: "Человек-знаковая система", value: 8.13 },
  { name: "Человек-техника", value: 17.08 },
  { name: "Человек-художественный образ", value: 28.65 },
  { name: "Человек-природа", value: 17.56 },
  { name: "Человек-человек", value: 28.58 },
];

const COLORS = ["#FFDF80", "#66BFFF", "#CA9EFF", "#99E5B2", "#FFC5BD"];

// страница не доделана
const CareerTestInterimResult = () => {
  return (
    <PageTemplate>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={`lk-page__title ${styles.title}`}>Промежуточный результат</h1>
          <p>Анализ ваших интересов показал, что вам ближе тип:</p>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Человек-человек</Accordion.Header>
              <Accordion.Body>
                Вам не&nbsp;очень интересно&nbsp;то, что предполагает работу с&nbsp;документами, знаками, цифрами, текстами, бумагами.
                Скорее всего, Вы&nbsp;относитесь к&nbsp;людям более-менее творческим, не&nbsp;любящим работу по&nbsp;алгоритму, монотонную,
                связанную с&nbsp;обработкой архивов, документов и&nbsp;расчетами. Сферы деятельности, где требуется точность, оперативность,
                аккуратность, дисциплинированность, ответственность, скорее всего, покажутся вам сухими, скучными и&nbsp;потребуют большого напряжения.
                Ваша склонность к&nbsp;импровизации, нестандартности, нерегламентированности может быть уместна для представителей творческих профессий,
                деятелей сферы искусств, а&nbsp;также при работе в&nbsp;условиях неопределенности, частых командировок и&nbsp;т.д.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Человек-техника</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse consequatur officiis aliquid fuga doloribus.
                Tempora aut, ea ut, eaque unde pariatur nesciunt debitis eligendi totam, officia voluptatem! Maiores suscipit esse odio
                delectus est placeat voluptatem corporis illo nesciunt velit non eligendi saepe dolores porro, aliquam, exercitationem
                eveniet possimus iusto.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Человек-знаковая система</Accordion.Header>
              <Accordion.Body>
                Вы&nbsp;показали повышенный интерес к&nbsp;знаковым системам&nbsp;&mdash; это условные знаки, цифры, коды, естественные и&nbsp;искусственные языки.
                Вы&nbsp;могли&nbsp;бы связать свою профессиональную деятельность с&nbsp;непосредственным отношением к&nbsp;самой развитой и&nbsp;всеохватывающей
                системе знаков&nbsp;&mdash; языку, работая со&nbsp;словами, книгами и&nbsp;текстами. Способность преобразовывать область реального производства
                в&nbsp;область чисел позволяет присвоить всему количественную меру либо провести научные исследования в&nbsp;области химии или биологии, пытаясь добыть
                необходимую информацию об&nbsp;окружающей среде. Для выполнения профессиональных задач необходимо обладать такими качествами как: терпение, организованность, аккуратность,
                а&nbsp;так&nbsp;же уметь принимать нестандартные решения для достижения результатов. Кроме того, при наличии других более выраженных интересов, работа со&nbsp;знаковыми
                системами может быть лишь частью другой, основной профессии или деятельности, направленной на&nbsp;системы условных знаков и&nbsp;схематические отображения объектов.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Человек-природа</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse consequatur officiis aliquid fuga doloribus.
                Tempora aut, ea ut, eaque unde pariatur nesciunt debitis eligendi totam, officia voluptatem! Maiores suscipit esse odio
                delectus est placeat voluptatem corporis illo nesciunt velit non eligendi saepe dolores porro, aliquam, exercitationem
                eveniet possimus iusto.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Человек-художественный образ</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse consequatur officiis aliquid fuga doloribus.
                Tempora aut, ea ut, eaque unde pariatur nesciunt debitis eligendi totam, officia voluptatem! Maiores suscipit esse odio
                delectus est placeat voluptatem corporis illo nesciunt velit non eligendi saepe dolores porro, aliquam, exercitationem
                eveniet possimus iusto.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className={styles.right}>
          <div className={styles.btns}>
            <Button className={`btn-reset`}>Подобрать расписание</Button>
            <Button href="/career-test-questions" className={`btn-reset`}>Пройти заново</Button>
            <Button className={`btn-reset`}>Далее</Button>
          </div>

          <DonutChartWithLegend data={data} colors={COLORS}/>
        </div>
      </div>
    </PageTemplate>
  );
}

export default CareerTestInterimResult;
