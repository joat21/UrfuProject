import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";
import styles from "./ReturnButton.module.css";

const ReturnButton = (props) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  }

  return (
    <Button
      className={`${styles['return-btn']} btn-reset`}
      onClick={clickHandler}
      style={props.style}
    >Назад</Button>
  );
}

export default ReturnButton;
