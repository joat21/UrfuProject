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
    fetch("https://my-json-server.typicode.com/joat21/UrfuProject/user")
      .then(response => response.json())
      .then(data => setUserHandler(data));

    fetch("https://my-json-server.typicode.com/joat21/UrfuProject/mentors")
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
