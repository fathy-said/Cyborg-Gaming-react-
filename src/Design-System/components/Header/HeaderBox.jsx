import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form, Button } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import "./header.css";
let HeaderBox = () => {
    return (
        <Navbar bg="" expand="lg">
            <Container>
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="" />
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{}}
                        navbarScroll
                    >
                        <Link to="/" className="nav-link">
                            home
                        </Link>
                        {/* <Nav.Link href="home">home</Nav.Link> */}

                        <Link to="/browse" className="nav-link">
                            browse
                        </Link>
                        <Link to="/details" className="nav-link">
                            details
                        </Link>
                        <Link to="/streams" className="nav-link">
                            Streams
                        </Link>
                        <Link to="/profile" className="nav-link">
                            profile
                        </Link>
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

//       <div className="container">
//           <div className="row">
//               <div className="col-12">
//                   <nav className="main-nav">
//                       {/* ***** Logo Start ***** */}
//                       <a href="index.html" className="logo">
//                           <img src="assets/images/logo.png" alt="" />
//                       </a>
//                       {/* ***** Logo End ***** */}
//                       {/* ***** Search End ***** */}
//                       <div className="search-input">
//                           <form id="search" action="#">
//                               <input
//                                   type="text"
//                                   placeholder="Type Something"
//                                   id="searchText"
//                                   name="searchKeyword"
//                                   onkeypress="handle"
//                               />
//                               <i className="fa fa-search" />
//                           </form>
//                       </div>
//                       {/* ***** Search End ***** */}
//                       {/* ***** Menu Start ***** */}
//                       <ul className="nav">
//                           <li>
//                               <a href="index.html">Home</a>
//                           </li>
//                           <li>
//                               <a href="browse.html" className="active">
//                                   Browse
//                               </a>
//                           </li>
//                           <li>
//                               <a href="details.html">Details</a>
//                           </li>
//                           <li>
//                               <a href="streams.html">Streams</a>
//                           </li>
//                           <li>
//                               <a href="profile.html">
//                                   Profile{" "}
//                                   <img
//                                       src="assets/images/profile-header.jpg"
//                                       alt=""
//                                   />
//                               </a>
//                           </li>
//                       </ul>
//                       <a className="menu-trigger">
//                           <span>Menu</span>
//                       </a>
//                       {/* ***** Menu End ***** */}
//                   </nav>
//               </div>
//           </div>
//       </div>
//   </header>;
