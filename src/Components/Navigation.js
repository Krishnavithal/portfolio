import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import "./Navigation.css";
export default class Navigation extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Navbar className="navbar" collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark" style={{ "borderBottom": "3px solid #04c2c9"}}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="navigation-links navigation-link-active">HOME</Nav.Link>
                        <Nav.Link href="#work-experience" className="navigation-links">WORK EXPERIENCE</Nav.Link>
                        <Nav.Link href="#about" className="navigation-links">ABOUT</Nav.Link>
                        <Nav.Link href="#portfolio" className="navigation-links">PORTFOLIO</Nav.Link>
                        <Nav.Link href="https://drive.google.com/file/d/1XcpudHdAWjFcE2lR7kA0yvsnhKV0i1kz/view?usp=sharing" target="_blank" className="navigation-links">RESUME</Nav.Link>
                        <Nav.Link href="#contact" className="navigation-links">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}