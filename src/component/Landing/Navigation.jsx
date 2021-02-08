import React from 'react';
import { MDBContainer, MDBNav, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";
import allQuiz from './QuizPage';
import QuizCategories from './QuizCategories';

class FixedNavbarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const bgPink = { backgroundColor: 'none' }
    const container = { height: 130 }
    return (
      <div>

        <header>
          <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
            <MDBNavbarBrand href="/">
              <strong>Guess What</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>

                <MDBNavItem>
                  <MDBNavLink to="/QuizCategories">Quiz Categories</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="#">Options</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>


      </div>
    );
  }
}

export default FixedNavbarExample;