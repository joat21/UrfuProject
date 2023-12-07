import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import styles from './Authorization.module.css';
import logo from "../../img/logo.svg";

const Autorisation = () => {
  return (
    <Container className={styles['authorization']}>
      <Link to={"/"}>
        <img className={styles.logo} src={logo} alt="Логотип UrFuture" />
      </Link>
      <form action="https://jsonplaceholder.typicode.com/posts" method="post" className="form">
        <h1 className={`lk-page__title ${styles.title}`}>Авторизация</h1>
        <div className="form__fields">
          <div className="form__control">
            <label className="control__title">Email</label>
            <input className="form__field" type="text" name="email" placeholder="Введите email или номер телефона" required/>
          </div>
          <div className="form__control">
            <label className="control__title">Пароль</label>
            <input className="form__field" type="text" name="password" placeholder="Введите пароль" required/>
          </div>
        </div>
        <Button type="submit" className={`btn-reset form__btn ${styles.btn}`}>Войти</Button>
        <div className="form__bottom">
          <span className="bottom__text">У&nbsp;вас нет учётной записи?</span>
          <Link className="form__link" to={"/registration"}>Зарегистрироваться</Link>
        </div>
      </form>
    </Container>
  );
}

export default Autorisation;
