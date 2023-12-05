import Sidenav from "../Sidenav/Sidenav";
import ReturnButton from "../ReturnButton/ReturnButton";
import styles from "./PageTemplate.module.css";

const PageTemplate = (props) => {
  const isReturnButtonVisible = props.isReturnButtonVisible == null ? true : props.isReturnButtonVisible;
  return (
    <div>
      <Sidenav />
      <div className="lk-container">
        <div className={styles['btn-title__wrapper']}>
          <h1 className="lk-page__title">{props.title}</h1>
          <ReturnButton style={{display: isReturnButtonVisible ? 'inline-block' : 'none'}}/>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default PageTemplate;
