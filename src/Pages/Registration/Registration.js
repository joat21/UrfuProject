import { Button, Container } from "react-bootstrap";

const Registration = () => {
  return (
    <Container className="registration">

      <form action="https://jsonplaceholder.typicode.com/posts" method="post" className="form">
        <h1>Регистрация</h1>
        <div className="form__fields">
          <div className="first-row">
            <div className="form__control">
              <label>Фамилия*</label>
              <input className="form__field" type="text" name="surname" placeholder="Введите фамилию" required/>
            </div>

            <div className="form__control">
              <label>Имя*</label>
              <input className="form__field" type="text" name="name" placeholder="Введите имя" required/>
            </div>
          </div>

          <div className="form__control">
            <label>Отчество*</label>
            <input className="form__field" type="text" name="patronymic" placeholder="Введите отчество" required/>
          </div>

          <div className="form__control">
            <label>Email</label>
            <input className="form__field" type="text" name="email" placeholder="Введите email или номер телефона" required/>
          </div>

          <div className="form__control">
            <label>Пароль*</label>
            <input className="form__field" type="text" name="password" placeholder="Введите пароль" required/>
          </div>

          <div className="form__control">
            <label>Повторите пароль*</label>
            <input className="form__field" type="text" name="repeated-password" placeholder="Введите пароль" required/>
          </div>
        </div>

        <Button type="submit" className="form__btn">Регистрация</Button>
        <div className="form__bottom">
          <span className="bottom__text">У&nbsp;вас есть учётная запись?</span>
          <a href="/authorization">Войти</a>
        </div>
      </form>
    </Container>
  );
}

export default Registration;
