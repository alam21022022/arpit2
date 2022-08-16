import React, { Fragment } from "react";
import classes from "./Spinner.module.css";
import ReactDOM from "react-dom";
import Spinner from "react-bootstrap/Spinner";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const portalElement = document.getElementById("spinner");

function SpinnerLoading() {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <div className={classes.spin}>
          <Spinner animation="border" />
        </div>,
        portalElement,
      )}
    </Fragment>
  );
}

export default SpinnerLoading;
