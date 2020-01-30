import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img width='250px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/1280px-Friends_logo.svg.png' alt='friends_logo'/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          {!props.isLogged ? <NavLink href="/login">Login</NavLink> : <NavLink onClick={() => localStorage.clear()} href="/">Logout</NavLink> }
        </Collapse>
      </Navbar>
    </div>
    )
}
const mapStateToProps = state => {
  return{
      title: state.title,
      isLoading: state.isLoading,
      isLogged: state.isLogged,
      token: state.token,
      friends: state.friends,
      error: state.error
  }
}
export default connect(
  mapStateToProps,
)(Navigation);