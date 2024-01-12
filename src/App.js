import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero/Hero';
import Autorisation from './Pages/Authorization/Authorization';
import Registration from './Pages/Registration/Registration';
import MyDirection from './Pages/MyDirection/MyDirection';
import FinishedCourses from './Pages/FinishedCourses/FinishedСourses';
import FinishedCourse from './Pages/FinishedCourse/FinishedCourse';
import TrajectoryConstruction from './Pages/TrajectoryConstruction/TrajectoryConstruction';
import CareerTestMain from './Pages/CareerTestMain/CareerTestMain';
import CareerTest from './Pages/CareerTest/CareerTest';
import CareerTestInterimResult from './Pages/CareerTestInterimResult/CareerTestInterimResult';
import Account from './Pages/Account/Account';
import Professions from './Pages/Professions/Professions';
import RecommendedSchedule from './Pages/RecommendedSchedule/RecommendedSchedule';
import Error from './Pages/Error/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Hero} />
        <Route path='/authorization' Component={Autorisation} />
        <Route path='/registration' Component={Registration} />
        <Route path='/my-direction' Component={MyDirection} />
        <Route path='/finished-courses' Component={FinishedCourses} />
        <Route path='/finished-courses/:course' Component={FinishedCourse} />
        <Route path='/trajectory-construction' Component={TrajectoryConstruction} />
        <Route path='/career-test' Component={CareerTestMain} />
        <Route path='/career-test-questions' Component={CareerTest} />
        <Route path='/career-test-interim-result' Component={CareerTestInterimResult} />
        <Route path='/account' Component={Account} />
        <Route path='/professions' Component={Professions} />
        <Route path='/recommended-schedule' Component={RecommendedSchedule} />
        <Route path='*' Component={Error}/>
      </Routes>
    </Router>
  );
}

export default App;
