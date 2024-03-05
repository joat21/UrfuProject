import Sidenav from "../Sidenav/Sidenav";
import ReturnButton from "../ReturnButton/ReturnButton";
import styles from "./PageTemplate.module.css";

// Часть страниц имеют похожее строение: Сайдбар, заголовок и кнопка "Назад"
// Хотел реализовать это в шаблоне страницы, но на некоторых страницах заголовок или кнопка в другом месте
// или кнопок несколько, где то кнопки нет совсем
// Пришлось всякие проверки добавлять, чтобы было больше гибкости
// Возможно, стоит отказаться от этого шаблона совсем или сделать нормальный
const PageTemplate = (props) => {
  const isReturnButtonVisible = props.isReturnButtonVisible == null ? true : props.isReturnButtonVisible;
  return (
    <div>
      <Sidenav />
      <div className="lk-container">
        <div
          className={styles['btn-title__wrapper']}
          style={{ display: isReturnButtonVisible && props.title === "" ? 'block' : 'none' }}
        >
          <h1 className="lk-page__title">{props.title}</h1>
          <ReturnButton style={{ display: isReturnButtonVisible ? 'inline-block' : 'none' }} />
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default PageTemplate;
