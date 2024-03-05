import { Form } from "react-bootstrap";
import styles from "./CareerTestQuestion.module.css";

const CareerTestQuestion = ({ question, onChooseVariant }) => {
  return (
    <div className={styles['question__wrapper']}>
      <h2 className={styles.question}>
        {question.title}
      </h2>
      <Form className={styles.answers}>
        {question.variants.map((variant, index) => (
          <Form.Check onChange={() => onChooseVariant(variant)} key={variant} className={styles.answer}
            name="answer"
            type="radio"
            id={index + 1}
            label={variant}
            value={variant}
          />
        ))}
      </Form>
    </div>
  );
}

export default CareerTestQuestion;
