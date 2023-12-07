import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import styles from "./Registration.module.css";
import logo from "../../img/logo.svg";

const Registration = () => {
  return (
    <Container className={styles.registration}>
      <Link to={"/"}>
        <img className={styles.logo} src={logo} alt="Логотип UrFuture" />
      </Link>
      <form action="https://jsonplaceholder.typicode.com/posts" method="post" className="form">
        <h1 className="lk-page__title form__title">Регистрация</h1>
        <div className="form__fields">
          <div className={styles['first-row']}>
            <div className={`form__control ${styles['form__control']}`}>
              <label className={`control__title ${styles['control__title']}`}>Фамилия</label>
              <input className={`form__field ${styles['form__field']}`} type="text" name="surname" placeholder="Введите фамилию" required/>
            </div>

            <div className={`form__control ${styles['form__control']}`}>
              <label className={`control__title ${styles['control__title']}`}>Имя</label>
              <input className={`form__field ${styles['form__field']}`} type="text" name="name" placeholder="Введите имя" required/>
            </div>
          </div>

          <div className={`form__control ${styles['form__control']}`}>
            <label className={`control__title ${styles['control__title']}`}>Отчество</label>
            <input className={`form__field ${styles['form__field']}`} type="text" name="patronymic" placeholder="Введите отчество" required/>
          </div>

          <div className={`form__control ${styles['form__control']}`}>
            <label className={`control__title ${styles['control__title']}`}>Email</label>
            <input className={`form__field ${styles['form__field']}`} type="text" name="email" placeholder="Введите email или номер телефона" required/>
          </div>

          <div className={`form__control ${styles['form__control']}`}>
            <label className={`control__title ${styles['control__title']}`}>Пароль</label>
            <input className={`form__field ${styles['form__field']}`} type="text" name="password" placeholder="Введите пароль" required/>
          </div>

          <div className={`form__control ${styles['form__control']}`}>
            <label className={`control__title ${styles['control__title']}`}>Повторите пароль</label>
            <input className={`form__field ${styles['form__field']}`} type="text" name="repeated-password" placeholder="Введите пароль" required/>
          </div>
        </div>

        <Button type="submit" className={`btn-reset form__btn ${styles.btn}`}>Регистрация</Button>
        <div className="form__bottom">
          <span className="bottom__text">У&nbsp;вас есть учётная запись?</span>
          <Link to={"/authorization"} className="form__link">Войти</Link>
        </div>
      </form>
    </Container>
  );
}

export default Registration;
