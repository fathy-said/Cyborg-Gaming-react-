import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/images/logo.png";
import "./header.css";
let HeaderBox = () => {
    return (
        <Navbar bg="" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {/* <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{}}
                        navbarScroll
                    >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#browse">browse</Nav.Link>
                        <Nav.Link href="#details">details</Nav.Link>
                        <Nav.Link href="#profile">profile</Nav.Link>

                        {/* <Nav.Link href="#" disabled>
                        Link
                    </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderBox;
