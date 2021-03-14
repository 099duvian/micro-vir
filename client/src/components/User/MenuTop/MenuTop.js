import React from "react";
import {Link} from 'react-router-dom';

//CSS
import './MenuTop.css'

//Bootstrap
import {Button, Nav, Navbar} from 'react-bootstrap';


export default function MenuTop() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Link to={"/"}>
                <Navbar.Brand>
                    Micro-Vir
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to={"/"}>
                            <span className="navbar-text">Home</span>
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="#link">
                        <Link to={"/upload"}>
                            <span className="navbar-text">Compartir</span>
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}