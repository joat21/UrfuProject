import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import PageTemplate from "../../Components/PageTemplate/PageTemplate";
import CareerTestQuestion from "../../Components/CareerTestQuestion/CareerTestQuestion";
import styles from "./CareerTest.module.css";

const CareerTest = () => {
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length));
  const percent = Math.round(questionNumber / questions.length * 100);
  let isVariantChoosed = false;
  let button;

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/joat21/UrfuProject/careerTestQuestions")
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  const onPrevButtonClick = () => {
    setQuestionNumber(questionNumber - 1);
  };

  const onNextButtonClick = () => {
    if (isVariantChoosed) {
      setQuestionNumber(questionNumber + 1);
    }
  };

  const onCompleteButtonClick = () => {
    if (!isVariantChoosed) return;

    fetch('https://my-json-server.typicode.com/joat21/UrfuProject/careerTestAnswers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(answers)
    })
  };

  const onChooseVariant = (variant) => {
    if (answers[questionNumber] !== variant) {
      answers[questionNumber] = variant;
    }
    isVariantChoosed = true;
  };

  if (questionNumber === questions.length - 1) {
    button = <Button
              onClick={onCompleteButtonClick}
              className={`btn-reset ${styles.btn}`}
              style={{padding: '16px 34px'}}
             >Завершить</Button>;
  } else {
    button = <Button onClick={onNextButtonClick} className={`btn-reset ${styles.btn}`}>Далее</Button>;
  }

  return (
    <PageTemplate>
      <div className={styles['test__wrapper']}>
        {questions.length && <CareerTestQuestion question={questions[questionNumber]} onChooseVariant={onChooseVariant}/>}

        <div className={styles['test__bottom']}>
          <span className={styles['question-counter']}>Вопрос {questionNumber + 1} из {questions.length}</span>
          <div className={styles['test__controls']}>
            <Button onClick={onPrevButtonClick} className={`btn-reset ${styles.btn}`} disabled={questionNumber === 0}>Назад</Button>
            <div className={styles.progress}>
              <div className={styles['progress__inner']} style={{width: percent + '%'}}/>
            </div>
            {button}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default CareerTest;
