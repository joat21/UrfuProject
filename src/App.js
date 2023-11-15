import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero/Hero';
import Autorisation from './Pages/Authorization/Authorization';
import Registration from './Pages/Registration/Registration';
import MyDirection from './Pages/MyDirection/MyDirection';
import FinishedCourses from './Pages/FinishedCourses/FinishedСourses';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Hero} />
        <Route path='/authorization' Component={Autorisation} />
        <Route path='/registration' Component={Registration} />
        <Route path='/my-direction' Component={MyDirection} />
        <Route path='/finished-courses' Component={FinishedCourses} />
      </Routes>
    </Router>
  );
}

export default App;
