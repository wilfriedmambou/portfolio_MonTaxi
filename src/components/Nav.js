import { logDOM } from '@testing-library/react';
import React from 'react';
import Logo from './Logo';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import {Nav,Navbar,NavItem,NavLink} from 'reactstrap'
export default function Nav1() {
  return (
    <div style={{overflow:'hidden'}}>
      <Navbar bg="" style={{marginTop:'39.53px',left:'0',right:'0',overflow:'hidden'}}>
      {/* padding:'20px' */}
        <div style={{float:'left',marginLeft:'66.53px' }}>
          {' '}
          <Logo />
        </div>
        <Nav  style={{float:'left'}}>
          <NavLink href="#home" style={{marginRight:'40.48px',color:'#000000',fontFamily:'Aleo'}}>Passager</NavLink>
          <NavLink href="#features" style={{marginRight:'40.48px',color:'#000000',fontFamily:'Aleo'}}>Chauffeur</NavLink>
          <NavLink href="#pricing" style={{marginRight:'40.48px',color:'#000000',fontFamily:'Aleo'}}>Nous contacter</NavLink>
        </Nav>
      </Navbar>

    </div>
  );
}
