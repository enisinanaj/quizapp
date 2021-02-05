import React from 'react';
import "../src/App.css";
import 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import landingPage from './component/Landing/landingPage';
import navigation from './component/Landing/Navigation';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css'; 
import QuizCategories from './component/Landing/QuizCategories';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={landingPage} />
        <Route path="/QuizCategories"  component={QuizCategories} />
        
       

      </Switch>

    </div>
  </Router>
  );
}

export default App;
