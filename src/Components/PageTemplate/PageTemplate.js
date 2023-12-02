import Sidenav from "../Sidenav/Sidenav";

const PageTemplate = (props) => {
  return (
    <div>
      <Sidenav />
      <div className="lk-container">
        <h1 className="lk-page__title completed-courses__title">{props.title}</h1>
        {props.children}
      </div>
    </div>
  );
}

export default PageTemplate;
