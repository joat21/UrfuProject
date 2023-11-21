import { Routes, Route } from 'react-router-dom';
import { Navbar, Button, Card, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Hero.css";
import Authorization from '../Authorization/Authorization';
import Registration from '../Registration/Registration';

const Hero = () => {
  return (
    <Container className='hero'>
      <Navbar>
        <Navbar.Brand>
          <svg className="logo-img" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.2011 5.05577C44.5319 8.30477 47.7782 12.9094 49.3029 18.2343L49.4584 18.7782L42.5429 15.7402L42.4994 15.6605C40.7817 12.5276 38.2375 9.90589 35.1586 8.08663C32.1851 6.32943 28.711 5.32022 24.9997 5.32022C21.2882 5.32022 17.8142 6.32943 14.8407 8.08686C11.7619 9.90612 9.21751 12.5278 7.50005 15.6608L7.45605 15.7404C5.15259 16.7564 2.8461 17.766 0.541016 18.7782L0.696767 18.2343C2.2217 12.909 5.46805 8.30477 9.79862 5.05577C14.0286 1.88179 19.2937 0 24.9997 0C30.7058 0 35.9708 1.88202 40.2011 5.05577Z" fill="#537173"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.807 50 50 38.8668 50 25.1329C50 23.9111 49.9099 22.7104 49.7386 21.5356L44.2688 19.1326L27.3468 11.6985C26.6087 11.3743 25.8062 11.2087 25 11.2087C24.1644 11.2087 23.3703 11.3843 22.6523 11.6997L5.73117 19.133L0.261449 21.5356C0.0900984 22.7102 0 23.9111 0 25.1329C0 38.8668 11.1928 50 25 50ZM36.8383 33.5326C36.8383 37.2582 31.5381 40.2782 25 40.2782C18.4619 40.2782 13.1617 37.2582 13.1617 33.5326V28.8731L22.6523 33.0422C23.3703 33.3574 24.1644 33.5329 25 33.5329C25.8062 33.5329 26.6087 33.3675 27.3468 33.0431L36.8383 28.8733V33.5326ZM45.0776 23.0427C45.1493 23.7298 45.1859 24.4271 45.1859 25.1329C45.1859 36.2222 36.1483 45.2115 25 45.2115C13.8515 45.2115 4.81412 36.2222 4.81412 25.1329C4.81412 24.4271 4.85067 23.7298 4.92238 23.0425L22.6523 30.8309C23.3703 31.1463 24.1644 31.3218 25 31.3218C25.8062 31.3218 26.6087 31.1565 27.3468 30.832L36.4668 26.8255L25.8966 21.3923V21.3921C25.45 21.201 25.1371 20.7601 25.1371 20.2458C25.1371 19.5573 25.6984 18.9989 26.3906 18.9989C26.6304 18.9989 26.8544 19.0659 27.045 19.1821L39.4042 25.5352L45.0776 23.0427Z" fill="#537173"/>
          </svg>
        </Navbar.Brand>
        <Button variant="dark" className="hero__btn theme-btn">
          Сменить тему
        </Button>
        <Button href="/authorization" className="hero__btn">Войти</Button>
        <Button href='/registration' className="hero__btn">Регистрация</Button>
      </Navbar>
      <div className="content">
        <div className="text">
          <h1>UrFuture</h1>
          <p>Наш сервис поможет вам в&nbsp;выборе будущей професии и&nbsp;подборе оптимальной образовательной траектории.</p>
        </div>
        <Card>
          <Card.Body>
            <Card.Title>Определить профессию будущего</Card.Title>
          </Card.Body>
        </Card>
      </div>

      <Routes>
        <Route path='/authorization' Component={Authorization}></Route>
        <Route path='/registration' Component={Registration}></Route>
      </Routes>
    </Container>
  );
}

export default Hero;