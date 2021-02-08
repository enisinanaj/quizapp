import React, { Fragment } from 'react';
import 'react-router-dom';
import { Button } from 'react-bootstrap';

import { Link } from "react-router-dom";
import axios from 'axios';
import {
  MDBMask,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow
} from "mdbreact";
import Navigation from './Navigation';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import IconButton from '@material-ui/core/IconButton';
import HourglassEmptyOutlinedIcon from '@material-ui/icons/HourglassEmptyOutlined';
import HighlightOutlinedIcon from '@material-ui/icons/HighlightOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';import './landing.css';
import questions from '../../questions.json';
import isEmpty from '../../utils/is-empty';



class QuizPlay extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        questions,
        currentQuestion: {},
        nextQuestion: {},
        previousQuestion: {},
        answer: '',
        numberOfQuestions: 0,
        numberOfAnsweredQuestions: 0,
        currentQuestionIndex: 0,
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        hints: 5,
        fiftyFifty: 2,
        usedFiftyFifty: false,
        nextButtonDisabled: false,
        previousButtonDisabled: true,
        previousRandomNumbers: [],
        time: {}
    };
  }
  // to display the questions
  componentDidMount () {
    const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state;
    this.displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion);
    
}

displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
  let { currentQuestionIndex } = this.state;   
  if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];
      const answer = currentQuestion.answer;
      this.setState({
          currentQuestion,
          nextQuestion,
          previousQuestion,
          numberOfQuestions: questions.length,
          answer,
         
      });
  }     
};
  render() {
    const { currentQuestion } = this.state;
    return (
      <div id="classicformpage">
        < Navigation /> 
        <MDBView>
          <MDBMask className="d-flex justify-content-right align-items-center gradient">
            <MDBContainer>
              <Fragment>
                <div className="questions"> 
                  ‍<h2> QUIZ PLAYGROUND </h2>
                  <div className="lifeLine-container">
                    <p>
                      <span className="lifeLine"> <IconButton color="inherit">
                        <FavoriteBorderOutlinedIcon /> </IconButton> 2 </span>
                    </p>
                    <p>
                      <span className="lifeLine" > <IconButton color="inherit">
                        <HighlightOutlinedIcon /> </IconButton> 2 hints </span>
                    </p>
                  </div>
                  <div>
                  <MDBRow className="mx-md-n5">
                    <MDBCol size="6" className="left py-3 px-md-5">1 of 15</MDBCol>
                      <MDBCol size="6" className="right py-3 px-md-5">
                        <IconButton color="inherit"> <HourglassEmptyOutlinedIcon />  00:10 
                        </IconButton>  
                      </MDBCol>
                  </MDBRow>
                   
                  </div>
                  <h5> { currentQuestion.question } </h5>
                  <div className="option-container">
                    <MDBBtn className="option" tag="a" size="lg" floating gradient="purple">{currentQuestion.optionA}</MDBBtn>
                    <MDBBtn className="option" tag="a" size="lg" floating gradient="purple">{currentQuestion.optionB}</MDBBtn>

                  </div>
                  <div className="option-container">
                    <MDBBtn className="option" tag="a" size="lg" floating gradient="purple">
                     {currentQuestion.optionC}
                    </MDBBtn>
                    <MDBBtn className="option" tag="a" size="lg" floating gradient="purple"> 
                      {currentQuestion.optionD}
                    </MDBBtn>
                  </div>
                  
                </div>
                <div className="button-contaier">
                  <MDBBtn outline color="white"><ArrowBackIosIcon /> Previous </MDBBtn>
                  <MDBBtn color="white">Next<ArrowForwardIosIcon/></MDBBtn>
                  <MDBBtn color="red">Quit <CloseIcon /> </MDBBtn>
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
