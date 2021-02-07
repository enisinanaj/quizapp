import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip, MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Fragment } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div id="classicformpage">
      <Fragment>
        <MDBBtn color="elegant">Books</MDBBtn>
        <MDBBtn color="unique">History</MDBBtn>
        <MDBBtn color="pink">Celebrities</MDBBtn>
        <MDBBtn color="purple">Movie</MDBBtn>
        <MDBBtn color="deep-purple">Music</MDBBtn>
        <MDBBtn color="indigo">Random</MDBBtn>
        <MDBBtn color="light-blue">Sports</MDBBtn>
        <MDBBtn color="cyan">General Knowledge</MDBBtn>
        <MDBBtn color="dark-green">Games</MDBBtn>
       {/*  <MDBBtn color="light-green">Light-green</MDBBtn>
        <MDBBtn color="yellow">Yellow</MDBBtn>
        <MDBBtn color="amber">Amber</MDBBtn>
        <MDBBtn color="deep-orange">Deep-orange</MDBBtn>
        <MDBBtn color="brown">Brown</MDBBtn>
        <MDBBtn color="blue-grey">Blue-grey</MDBBtn>
        <MDBBtn color="mdb-color">MDB</MDBBtn> */}
      </Fragment>

      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            How to Play the Game
        </Typography>
          
          <Typography className={classes.pos} color="textSecondary">
            Each quiz has 4 options 
        </Typography>
          <Typography variant="body2" component="p">
            Each game has 2 lifelines normally.
            <li> Two 50-50 chances which removes 2 of the wrong options </li>
            <li> 5 hints. by clicking once it will remove one wrong option. you </li>
          <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}


