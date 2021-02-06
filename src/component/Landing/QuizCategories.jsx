import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Fragment } from "react";



const ButtonPage = () => {
  return (


    <Fragment>
      <MDBBtn color="elegant">Elegant</MDBBtn>
      <MDBBtn color="unique">Unique</MDBBtn>
      <MDBBtn color="pink">Pink</MDBBtn>
      <MDBBtn color="purple">Purple</MDBBtn>
      <MDBBtn color="deep-purple">Deep-purple</MDBBtn>
      <MDBBtn color="indigo">Indigo</MDBBtn>
      <MDBBtn color="light-blue">Light blue</MDBBtn>
      <MDBBtn color="cyan">Cyan</MDBBtn>
      <MDBBtn color="dark-green">Dark-green</MDBBtn>
      <MDBBtn color="light-green">Light-green</MDBBtn>
      <MDBBtn color="yellow">Yellow</MDBBtn>
      <MDBBtn color="amber">Amber</MDBBtn>
      <MDBBtn color="deep-orange">Deep-orange</MDBBtn>
      <MDBBtn color="brown">Brown</MDBBtn>
      <MDBBtn color="blue-grey">Blue-grey</MDBBtn>
      <MDBBtn color="mdb-color">MDB</MDBBtn>
    </Fragment>
  
   );
  }


export default ButtonPage;