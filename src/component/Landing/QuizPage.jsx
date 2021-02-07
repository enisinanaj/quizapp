
import React , { Fragment} from 'react';
import 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Card, CardBody, NavItem, NavLink, Nav, TabContent, TabPane, CardTitle, CardText, CardGroup, CardSubtitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';


class QuizPlay extends React.Component {
  constructor(props) {
    super(props);
   /*  this.state = {
      counter: 0
    }; */
  }
  increaseCount = () => {
    this.setState({
      counter: 5
    });
  };

  render() {
    return (
      <div class= "categories">
      <Fragment>
      <div className="questions">
            <h5> What is the capital of France?> </h5>
            
                     
       
   
      </div>
    </Fragment>
    </div>
  
  
    );


  }
}

export default QuizPlay;

   {/*  <p>Counter: {this.state.counter} </p>
        <button onClick={this.increaseCount}  >Click me</button>
      </div> */}
