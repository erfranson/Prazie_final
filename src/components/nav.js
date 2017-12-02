import React, {Component} from 'react';
import {Navbar, Nav, NavItem, MenuItem,NavbarBrand, NavbarCollapse} from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';


const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};




class PageNav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      toggle: false
    };
  }

  toggle(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  responseFacebook(response) {
        console.log(response);
      }

  render(){

    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal-content">
        <h4 className="text-center">Sign Up</h4>
        <FacebookLogin
          appId="133222177384936"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
          cssClass="btn-primary"
          icon="fa-facebook"
        />
        <p>A bunch of text</p>
      </div>
    </div>
  );

  return (
    <div>
      <Navbar collapseOnSelect fixedTop className="nav-1">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><img src="./images/praize-logo-color.png"/></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="pull-right">
            <NavItem eventKey={2} href="#"><strong>Become a Photographer</strong></NavItem>
            <NavItem eventKey={2} href="#"><strong>Help</strong></NavItem>
            <NavItem eventKey={2} href="#" onClick={this.toggle}><strong>Sign Up</strong></NavItem>
            <NavItem eventKey={3} href="#"><strong>Sign In</strong></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        {modal}
      </div>
  </div>
  );
}
}

export default PageNav;
