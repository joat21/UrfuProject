import { useLocation } from "react-router";
import Sidenav from "../../Components/Sidenav/Sidenav";

const FinishedCoursePage = () => {
  const courseName = useLocation().state;
  return(
    <div>
      <Sidenav />
      <div className="lk-container">
        <h1 className="lk-page__title completed-courses__title">{courseName}</h1>
      </div>
    </div>
  );
}

export default FinishedCoursePage;
