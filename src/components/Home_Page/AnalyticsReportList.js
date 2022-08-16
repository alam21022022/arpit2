import React from "react";
// import NavLink from "react-bootstrap/NavLink";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { BsArrowRight } from "react-icons/bs";

const AnalyticsReportList = () => {
  return (
    <div>
      <Container className="mt-4 d-flex w-75">
        <h3 className="mt-5">Analytics & Reports List</h3>
      </Container>

      <Container className="container w-75" style={{ marginTop: "3rem" }}>
        {/* <NavLink to="/domains"> */}
        <Card
          className=""
          style={{
            height: "4rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card.Body className="card-1 ">
            <div className="img1">
              <h5>Events Report</h5>
            </div>
            <h5>
              <BsArrowRight style={{ color: "blue" }} />
            </h5>
          </Card.Body>
        </Card>
        {/* </NavLink> */}

        <div>
          <Card
            className=""
            style={{
              height: "4rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card.Body className="card-1">
              <div className="img1">
                <h5>Skills Report</h5>
              </div>
              <h5>
                <BsArrowRight style={{ color: "blue" }} />
              </h5>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card
            className=""
            style={{
              height: "4rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card.Body className="card-1">
              <div className="img1">
                <h5>Language Report</h5>
              </div>
              <h5>
                <BsArrowRight style={{ color: "blue" }} />
              </h5>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card
            className=""
            style={{
              height: "4rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card.Body className="card-1">
              <div className="img1">
                <h5>Company Report</h5>
              </div>
              <h5>
                <BsArrowRight style={{ color: "blue" }} />
              </h5>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default AnalyticsReportList;
