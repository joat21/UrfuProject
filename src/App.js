import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero/Hero';
import Autorisation from './Pages/Authorization/Authorization';
import Registration from './Pages/Registration/Registration';
import MyDirection from './Pages/MyDirection/MyDirection';
import FinishedCourses from './Pages/FinishedCourses/FinishedСourses';
import FinishedCourse from './Pages/FinishedCourse/FinishedCourse';
import TrajectoryConstruction from './Pages/TrajectoryConstruction/TrajectoryConstruction';
import CareerTest from './Pages/CareerTest/CareerTest';
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
        <Route path='/career-test' Component={CareerTest} />
        <Route path='*' Component={Error}/>
      </Routes>
    </Router>
  );
}

export default App;
