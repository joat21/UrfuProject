import { useEffect, useState } from "react";
import PageTemplate from "../../Components/PageTemplate/PageTemplate";
import UserInfo from "../../Components/UserInfo/UserInfo";
import MentorsList from "../../Components/MentorsList/MentorsList";
// import styles from "./MyDirection.module.css";

const Personal = () => {
  const [user, setUser] = useState({});

  const setUserHandler = (data) => {
    setUser(data);
  }

  const [mentors, setMentors] = useState([]);

  const setMentorsHandler = (data) => {
    data = data.splice(0, 4);
    setMentors(data);
  }

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then(response => response.json())
      .then(data => setUserHandler(data));

    fetch("http://localhost:5000/mentors")
      .then(response => response.json())
      .then(data => setMentorsHandler(data));
  }, [])

  return (
    <PageTemplate title={"Мое направление"}>
      <UserInfo user={user}/>
      <MentorsList mentors={mentors}/>
    </PageTemplate>
  );
}

export default Personal;
