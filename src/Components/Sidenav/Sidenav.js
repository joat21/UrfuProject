import { Navbar, Nav } from "react-bootstrap";
import menu from "../../img/sidenav/menu.svg";
import main from "../../img/sidenav/main-page.svg";
import schedule from "../../img/sidenav/schedule.svg";
import personal from "../../img/sidenav/personal.svg";
import iet from "../../img/sidenav/iet.svg";
import trajectory from "../../img/sidenav/trajectory.svg";
import professions from "../../img/sidenav/professions.svg";
import careerTest from "../../img/sidenav/career-test.svg";
import account from "../../img/sidenav/account.svg";

const Sidenav = () => {
  return (
    <Navbar className="sidenav">
      <Nav.Link href="/" className="sidenav__link link_menu">
        <img className="link__icon" src={menu} alt="menu" />
      </Nav.Link>
      <Nav.Link href="/my-direction" className="sidenav__link">
        <img className="link__icon" src={main} alt="menu" />
      </Nav.Link>

      <svg width="46" height="1" viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="46" y2="0.5" stroke="#F9F9F9"/>
      </svg>

      <Nav.Link className="sidenav__link">
        <img className="link__icon" src={schedule} alt="menu" />
      </Nav.Link>
      <Nav.Link href="/finished-courses" className="sidenav__link">
        <img className="link__icon" src={personal} alt="menu" />
      </Nav.Link>
      <Nav.Link className="sidenav__link">
        <img className="link__icon" src={iet} alt="menu" />
      </Nav.Link>
      <Nav.Link href="/trajectory-construction" className="sidenav__link">
        <img className="link__icon" src={trajectory} alt="menu" />
      </Nav.Link>
      <Nav.Link href="/professions" className="sidenav__link">
        <img className="link__icon" src={professions} alt="профессии" />
      </Nav.Link>
      <Nav.Link  href="/career-test" className="sidenav__link">
        <img className="link__icon" src={careerTest} alt="тест на профориентацию" />
      </Nav.Link>

      <svg className="decorate-line" width="46" height="1" viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="46" y2="0.5" stroke="#F9F9F9"/>
      </svg>

      <Nav.Link href="/account" className="sidenav__link">
        <img className="link__icon" src={account} alt="account" />
      </Nav.Link>
    </Navbar>
  );
}

export default Sidenav;
