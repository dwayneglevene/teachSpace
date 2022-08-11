import './App.css';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Welcome from './components/welcome';
import Classroom from './components/classroom';
import Navigation from './components/navigation';
import Inclusion from './components/inclusion';
import Lesson from './components/lesson_samples';

import classes from './colors.module.css';


function App() {
  return (
  <div>
  
    {/* <Welcome /> */}

   <Navigation />
 <Switch>  


    <Route path='/' exact>
      <Welcome />

    </Route>

    <Route path='/inclusion'>
      <Inclusion />

    </Route>

    <Route path='/classroom'>
      <Classroom />

    </Route>

    <Route path='/lessons'>
      <Lesson />

    </Route>

    </Switch>

  </div>

  );
}

export default App;
