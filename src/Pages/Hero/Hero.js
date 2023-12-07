import { Link } from "react-router-dom";
import { Navbar, Button, Card, Container} from "react-bootstrap";
import styles from "./Hero.module.css";
import logo from "../../img/logo.svg";

const Hero = () => {
  return (
    <Container className={`${styles.hero}`}>
      <Navbar className={styles.navbar}>
        <Navbar.Brand className={styles['navbar__brand']}>
          <img src={logo} alt="Логотип UrFuture" />
        </Navbar.Brand>
        <Button href="/authorization" className={`btn-reset ${styles['hero__btn']}`}>Войти</Button>
        <Button href='/registration' className={`btn-reset ${styles['hero__btn']}`}>Регистрация</Button>
      </Navbar>
      <div className={styles.content}>
        <div className={styles['content__inner']}>
          <h1 className={styles.title}>UrFuture</h1>
          <div className={styles['desc__wrapper']}>
            <p className={styles.desc}>Наш сервис поможет вам в&nbsp;выборе будущей професии и&nbsp;подборе оптимальной образовательной траектории.</p>
          </div>
          <Card className={styles.card}>
            <div className={styles['card__inner']}>
              <Card.Body className={styles['card__body']}>
                <Link to={"/career-test"} className={styles.link}>
                  <Card.Title className={styles['card__title']}>Определить&nbsp;профессию будущего</Card.Title>
                </Link>
              </Card.Body>
            </div>
          </Card>
        </div>
      </div>

      <Button className={`btn-reset ${styles['btn_change-theme']}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M29.8525 4.75396C31.6681 6.46121 31.2498 9.0672 30.3851 11.0528L30.3836 11.0562C29.0732 14.0513 28.3527 17.3351 28.3795 20.8084L28.3795 20.8161C28.4329 33.7061 39.1474 44.7029 52.2689 45.2395L52.2706 45.2396C54.208 45.3203 56.0597 45.186 57.8578 44.8641C59.0386 44.6491 60.1876 44.6129 61.2163 44.8528C62.2647 45.0973 63.3064 45.6659 63.9518 46.722C64.5945 47.7737 64.628 48.9552 64.3816 49.9918C64.139 51.013 63.6032 52.0212 62.8966 52.9787C56.7012 61.4551 46.3872 66.8223 34.8764 66.3232L34.8751 66.3231C18.5397 65.6047 4.87001 52.5379 3.7392 36.3803C2.70601 22.0573 11.2066 9.58293 23.5628 4.3721C25.5456 3.53227 28.105 3.11077 29.8525 4.75396ZM26.7466 8.00751C26.4547 8.01558 25.9643 8.1059 25.2668 8.40165L25.2629 8.4033C14.5198 12.9338 7.21236 23.7334 8.10301 36.0676L8.10338 36.0727C9.07379 49.9551 20.8945 61.3284 35.066 61.9523M26.9809 8.02544C26.9808 8.02555 26.9784 8.02489 26.974 8.02315C26.9788 8.02446 26.981 8.02533 26.9809 8.02544ZM26.7466 8.00751C26.7293 8.26399 26.6414 8.69127 26.3748 9.30405C24.8277 12.8407 23.9735 16.7301 24.0046 20.8381C24.07 36.1214 36.6879 48.9809 52.0901 49.6109C54.3513 49.705 56.5229 49.5478 58.6318 49.1701L58.6389 49.1688C59.3372 49.0414 59.8102 49.0472 60.0949 49.0895C60.0074 49.3699 59.8015 49.8054 59.3742 50.3837L59.3674 50.393C54.0127 57.722 45.0788 62.386 35.0673 61.9523M60.3615 49.1577C60.3614 49.1577 60.36 49.1571 60.3576 49.1557L60.3615 49.1577ZM60.1495 48.8253C60.1492 48.8213 60.1492 48.8193 60.1493 48.8192C60.1493 48.8191 60.1495 48.8211 60.1495 48.8253Z" fill="#2B4A52"/>
        </svg>
      </Button>
    </Container>
  );
}

export default Hero;
