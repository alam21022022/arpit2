import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AiTwotoneDelete } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Domain.module.css";

import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap";

const Domains = (props) => {
  //Add domains modal state....
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [company, setCompany] = useState("");
  const [domains, setDomains] = useState("");

  const [companyNameValidation, setCompanyNameValidation] = useState(true);
  const [companyDomainValidation, setCompanyDomainValidation] = useState(true);
  const checkDomains = useSelector((state) => state);

  const dispatch = useDispatch();

  const checkDomain = checkDomains.find(
    (checkDomains) => checkDomains.domains === domains && domains,
  );
  console.log(checkDomains);
  const handleCreate = (e) => {
    e.preventDefault();

    if (!company) {
      setCompanyNameValidation(false);
    }

    if (!domains) {
      setCompanyDomainValidation(false);
    }

    if (!company.trim()) {
      setCompanyNameValidation(false);
      return toast.warning("Enter Company Name");
    } else if (!companyNameValidation) {
      return toast.warning("Enter Valid Comapany Name");
    } else if (!domains) {
      setCompanyDomainValidation(false);
      return toast.warning("domain field is empty");
    } else if (!companyDomainValidation) {
      return toast.warning("Enter Valid Domain Name");
    } else if (checkDomain) {
      return toast.warning("Already Exist");
    } else {
      const addDomains = {
        id:
          checkDomains.length > 0
            ? checkDomains[checkDomains.length - 1].id + 1
            : 1,
        uniqueId: Date.now(),
        company: company,
        domains: domains,
      };
      props.setShowSpinner(true);
      handleClose();
      setTimeout(() => {
        dispatch({ type: "Add_Domains", payload: addDomains });
        toast.success("Domains added successfully");
        setCompany("");
        setDomains("");
        props.setShowSpinner(false);
      }, 2000);
    }
  };
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteItem, setDeleteItem] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);
  const handleDeleteConfirmationModel = () => {
    setShowDeleteConfirmation(true);
  };
  const handleDeleteConfirmationClose = () => {
    setShowDeleteConfirmation(false);
  };

  const handleDleteConfirmationDomain = (domainID) => {
    props.setShowSpinner(true);
    setShowDeleteConfirmation(false);
    setTimeout(() => {
      dispatch({ type: "Delete_Domain", payload: domainID });
      props.setShowSpinner(false);
    }, 2000);
  };

  return (
    <div className="container mt-1 w-75">
      <div className="row">
        <div
          className="col-md-12 my-5 text-right"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h2>
            <strong>Whitelisted Domains</strong>
          </h2>
          <button className="btn btn-primary" onClick={handleShow}>
            Add New Domain
          </button>
        </div>
      </div>

      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Domains</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Dainamic data .................................... */}
          {checkDomains.map((item, index) => (
            <tbody key={item.id}>
              <tr>
                <td>{index + 1}</td>
                <td>{item.company}</td>
                <td>{item.domains}</td>
                <td
                  style={{ paddingLeft: "3vh" }}
                  onClick={() => {
                    setDeleteItem({ id: item.uniqueId, name: item.domains });
                  }}
                >
                  <AiTwotoneDelete
                    onClick={handleDeleteConfirmationModel}
                    style={{ color: "red", cursor: "pointer" }}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>

      {/* Confirmation Modal */}
      <>
        <Modal
          show={showDeleteConfirmation}
          onHide={handleDeleteConfirmationClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you Sure you want to delete <strong>{deleteItem?.name}</strong>{" "}
            whitelisted domain?
          </Modal.Body>
          {showSpinner && (
            <Spinner
              style={{ display: "flex", alignSelf: "center" }}
              animation="border"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          <Modal.Footer
            className="footer"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              variant="secondary"
              onClick={() => setShowDeleteConfirmation(false)}
              style={{
                width: "6rem",
              }}
            >
              Close
            </Button>
            <Button
              onClick={() => handleDleteConfirmationDomain(deleteItem?.id)}
              variant="primary"
              className="footer"
              style={{
                background: "red",
                color: "white",
                border: "2px red solid",
                width: "6rem",
              }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      {/* Add Domains Modal..... */}
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Domain</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Company Name<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                className={`${!companyNameValidation && classes.dn_inp}`}
                type="text"
                placeholder="Enter Company Name"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                  setCompanyNameValidation(/^[a-z- ]+$/i.test(e.target.value));
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Domain<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                className={`${!companyDomainValidation && classes.dn_inp}`}
                type="text"
                placeholder="Enter Domain - Eg: example.com"
                value={domains}
                onChange={(e) => {
                  setDomains(e.target.value);
                  setCompanyDomainValidation(
                    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/i.test(
                      e.target.value,
                    ),
                  );
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        {showSpinner && (
          <Spinner
            style={{ display: "flex", alignSelf: "center" }}
            animation="border"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <Modal.Footer
          className="footer"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" value="Create" onClick={handleCreate}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Domains;
