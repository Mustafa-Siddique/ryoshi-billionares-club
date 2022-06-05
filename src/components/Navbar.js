import React,{useState,useEffect} from "react";
import { Button, Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/images/logo.png'
import {FaInstagram, FaDiscord, FaTwitter, FaTelegram} from 'react-icons/fa'
import {login,getUserAddress} from './../Web3/Web3_functions'

export default function NavBar() {
  const [useradd, setUserAdd] = useState('')

  useEffect(()=>{
    const init=async()=>{
      log_in()
    }
    init();
  },[])

  const log_in = async()=>{
    const data = await window.ethereum.enable();
    if(data){
      const address = await getUserAddress()
      window.address = address
      setUserAdd(address)
      console.log(' user address ', address)
    }
  }
  const slicing =(add)=>{
    const first = add.slice(0,4);
    const second = add.slice(38);
    return first + '...' + second
  }
  window.ethereum.on('chainChanged', (id) => {
    window.location.reload()
  });

  window.ethereum.on('accountsChanged', (accounts) => {
    setUserAdd(accounts[0])
    window.add = accounts[0]
  });

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
            <Button href="#link" className="btnNav ms-md-2" variant="outline-warning" onClick={()=>log_in()}>{useradd ? slicing(useradd) : "Connect"}</Button>
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
