import React from "react";
import { Button, Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/images/logo.png'
import {FaInstagram, FaDiscord, FaTwitter, FaTelegram} from 'react-icons/fa'

export default function NavBar() {
  return (
    <Navbar expand="lg">
        <Navbar.Brand href="#home" className="text-light">
            <img src={logo} alt="" /> &nbsp;
            RYOSHI BILLIONAIRES CLUB
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">ABOUT</Nav.Link>
            <Nav.Link href="#link">NFTS</Nav.Link>
            <Nav.Link href="#link">ROADMAP</Nav.Link>
            <Nav.Link href="#link">CONTACT US</Nav.Link>
            <div className="navSocials">
              <a href="https://www.reddit.com/r/RyoshiTokenBSC/"><FaInstagram/></a>
              <a href="https://discord.gg/5432xGbw"><FaDiscord/></a>
              <a href="https://twitter.com/ToshiroNft"><FaTwitter/></a>
              <a href="https://t.me/ryoshitokenofficial"><FaTelegram/></a>
            </div>
            <Button href="#link" className="btnNav ms-md-2" variant="outline-warning">MINT</Button>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
