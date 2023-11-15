import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <a href="#">Dropdown</a>
      <ul className="list-reset dropdown__content">
        <li className="dropdown__item"><a href="#">Item 1</a></li>
        <li className="dropdown__item"><a href="#">Item 2</a></li>
        <li className="dropdown__item"><a href="#">Item 3</a></li>
        <li className="dropdown__item"><a href="#">Item 4</a></li>
      </ul>
    </div>
  );
}

export default Dropdown;
