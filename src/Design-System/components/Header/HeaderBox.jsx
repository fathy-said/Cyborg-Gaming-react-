import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import pro from "../../assets/images/profile-header.jpg";
import { FaTh } from "react-icons/fa";
import "./header.css";
let HeaderBox = () => {
    let tarActive = (el) => {
        // remove active in all elements
        el.target.parentElement
            .querySelector(".active")
            .classList.remove("active");
        // add active in target
        if (!el.target.classList.contains("active")) {
            el.target.classList.add("active");
        }
    };
    return (
        <Navbar bg="" expand="lg">
            <Container>
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="" />
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll">
                    <FaTh />
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex my-lg-0">
                        <Form.Control
                            type="search"
                            placeholder="type something"
                            className="me-2 "
                            aria-label="Search"
                        />
                    </Form>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{}}
                        navbarScroll
                    >
                        <Link
                            to="/"
                            onClick={(e) => {
                                tarActive(e);
                            }}
                            className="nav-link active"
                        >
                            home
                        </Link>
                        {/* <Nav.Link href="home">home</Nav.Link> */}

                        <Link
                            to="/browse"
                            className="nav-link"
                            onClick={(e) => {
                                tarActive(e);
                            }}
                        >
                            browse
                        </Link>
                        <Link
                            to="/details"
                            className="nav-link"
                            onClick={(e) => {
                                tarActive(e);
                            }}
                        >
                            details
                        </Link>
                        <Link
                            to="/streams"
                            className="nav-link"
                            onClick={(e) => {
                                tarActive(e);
                            }}
                        >
                            Streams
                        </Link>
                        <Link
                            to="/profile"
                            className="nav-link"
                            onClick={(e) => {
                                tarActive(e);
                            }}
                        >
                            profile
                            <img src={pro} alt="" />
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
