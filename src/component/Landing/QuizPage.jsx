
import React, { Fragment } from 'react';
import 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Card, CardBody, NavItem, NavLink, Nav, TabContent, TabPane, CardTitle, CardText, CardGroup, CardSubtitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import {
  MDBMask,
  MDBBtn,
  MDBView,
  MDBContainer, 
  MDBIcon,
} from "mdbreact";
import './landing.css';
import Navigation from './Navigation';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import IconButton from '@material-ui/core/IconButton';
import HourglassEmptyOutlinedIcon from '@material-ui/icons/HourglassEmptyOutlined';
import HighlightOutlinedIcon from '@material-ui/icons/HighlightOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


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
      <div id="classicformpage">
        < Navigation />
        <MDBView>
          <MDBMask className="d-flex justify-content-right align-items-center gradient">
            <MDBContainer>
              <Fragment>
                <div className="questions">
                  <div className="lifeLine-container">
                    <p>
                      <span> <IconButton color="inherit">
                       <FavoriteBorderOutlinedIcon /> </IconButton> 2 </span>
                    </p>
                    <p>
                      <span> <IconButton color="inherit">
                       <HighlightOutlinedIcon /> </IconButton> 2 hints </span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>1 of 15</span>
                      <span> 
                      <IconButton color="inherit">
                       <HourglassEmptyOutlinedIcon />timer  00:10 </IconButton>  </span>
                    </p>
                  </div>
                  <h5> What is the capital of France?> </h5>
                  <div className="option-container">
                    <p className="option">New York </p>
                    <p className="option">London </p>
                  </div>
                  <div className="option-container">
                    <p className="option">Paris </p>
                    <p className="option">Dublin </p>
 
                  </div>
                  <div className="button-contaier">
                   <MDBBtn outline color="white">Previous <ArrowBackIosIcon/> </MDBBtn>
                   <MDBBtn color="white">Next<NavigateNextIcon/>  </MDBBtn>
                   <MDBBtn color="red">Quit <CloseIcon/> </MDBBtn>
                   
                  </div>
                </div>
              </Fragment>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>


    );


  }
}

export default QuizPlay;

{/*  <p>Counter: {this.state.counter} </p>
        <button onClick={this.increaseCount}  >Click me</button>
      </div> */}
