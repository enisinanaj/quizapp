import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";


const QuizzCategory = () => {
  return (
    <section className="text-center my-5" >
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Choose a quiz
      </h2>
     
      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Books <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    movie <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1054&q=80"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Math <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      
      </MDBRow>
    </section>
  );
}

export default QuizzCategory;