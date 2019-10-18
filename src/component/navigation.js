import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Label,
 } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isAdmin : false,

      
    };
    console.log(props);
    this.handleClick=this.handleClick.bind(this);
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClick(e){
    localStorage.clear();
  }


  render() {
    
    console.log(this.props.role)
    return (
      <div>
        <Navbar color="" white expand="lg">
          <NavbarBrand href="/dashboard">React App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>


          {(() => {
              if(localStorage.getItem("userRollname") === "admin"){
                return (
                  
                    <Nav>
                    <NavItem>
                      <NavLink href="/dashboard"> Home</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink href="/createUser">Add User</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/userRoles">User Rolls</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/person">Person Info</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/authorize">Authorize User</NavLink>
                    </NavItem>
                    </Nav>
                 
                )
        
              }else if(localStorage.getItem("userRollname") === " Operator"){
                console.log("in else");
                return (
                    <Nav>
                    <NavItem>
                      <NavLink href="/dashboard"> Home</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink href="/createUser">Add User</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/person">Person Info</NavLink>
                    </NavItem>
                    </Nav>
                  
                )
              }
            }) ()} 


         
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">
                  <Label>
                  Welocome :{localStorage.getItem("usernameOne")}
                </Label> 
                
                <Label>
                UserType : {localStorage.getItem("userRollname")}
                </Label>
                </NavLink>
                
              </NavItem>
              <NavItem>
                <NavLink href="/">
                <Button color="light" className="is-rounded" onClick={this.handleClick}>Logout</Button>
                </NavLink>
              </NavItem>
             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}