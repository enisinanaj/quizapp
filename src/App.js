import React from 'react';
import 'react-router-dom';
import "../src/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import landingPage from './component/Landing/landingPage';
import navigation from './component/Landing/Navigation';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css'; 
import allQuiz from './component/Landing/allQuiz';
import QuizCategories from './component/Landing/QuizCategories';
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={landingPage} />      
        <Route path="/Quiz" exact component={allQuiz} /> 
        <Route path="/QuizCategories" exact component={QuizCategories} /> 
        
       

      </Switch>

    </div>
  </Router>
  );
}

export default App;
