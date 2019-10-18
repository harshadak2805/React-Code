import React , {Component} from 'react';
import Navigation from './navigation'
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
    Form
   } from 'reactstrap';
import {HashRouter as Link} from 'react-router-dom';


class LoginOptions extends Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          isAdmin : false,
        };

        this.signIn =this.signIn.bind(this);
        this.signUp =this.signUp.bind(this);
    }

    toggle(e) {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    signIn(e){
        
    }

    signUp(e){
       
    }

    render(){
        return (
    //         <Container>
    //         <Form className="FormFields">
    //         <FormGroup>
    //         <div className="FormTitle">
            
    //         <Link to ="/"> Sign In </Link>
    //           or 
    //        <Link to ="/sign-up">Sign Up</Link>
    //      </div>
        
    //     </FormGroup>
    //     </Form> 
    //    </Container>

        <Navbar className="navbar-inverse bg-primary" color="" expand="md">
            
            <NavbarBrand href="/" className =" navbar-dark">
                        <span class="navbar-brand mb-0 h1">React Application</span>
                </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar></Collapse>

            <Nav className="ml-auto" navbar>
                <Form class="form-inline">
                    <Button class="btn btn-outline-success" onCilck={this.signIn} type="button">
                        <Link to ="/"> Sign In </Link>
                    </Button>
                    <Button class="btn btn-outline-success" onCilck={this.signUp} type="button">
                        <Link to ="/"> Sign Up </Link>
                       
                    </Button>
                </Form>
            </Nav>
            
        </Navbar>
        );
    }
}

export default LoginOptions;