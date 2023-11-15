import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";


const Header = () => {
  return (
    <header className="header">
      <div className="logo mr-auto">

      </div>

      <Button variant="dark" className="theme-button">Сменить тему</Button>
      <Button className="header-btn">Войти</Button>
      <Button className="header-btn">Регистрация</Button>
    </header>
  );
}

export default Header;
