import { Button, Container } from "react-bootstrap";
import "../../custom.css";

const Autorisation = () => {
  return (
    <Container className="autorisation">
      <form action="https://jsonplaceholder.typicode.com/posts" method="post" className="form">
      <h1>Авторизация</h1>
        <div className="form__fields">
          <div className="form__control">
            <label>Email</label>
            <input className="form__field" type="text" name="email" placeholder="Введите email или номер телефона" required/>
          </div>
          <div className="form__control">
            <label>Пароль</label>
            <input className="form__field" type="text" name="password" placeholder="Введите пароль" required/>
          </div>
        </div>
        <Button type="submit" className="form__btn">Войти</Button>
        <div className="form__bottom">
          <span className="bottom__text">У&nbsp;вас нет учётной записи?</span>
          <a href="/registration">Зарегистрироваться</a>
        </div>
      </form>
    </Container>
  );
}

export default Autorisation;
