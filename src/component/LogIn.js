import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row,Container, Form, FormGroup, Label, Input, Button,InputGroup, InputGroupAddon,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock,faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import LoginOptions from './loginOptions'



class LogIn extends Component {

    constructor(props) {
        
        super(props)
        this.state = {
            username: "",
            password: "",
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
           
        });
    };


    onSubmit(e) {
        e.preventDefault();
        console.log("submitttttttttt");
         if (this.validateForm()) {
            let username = this.state.username;
            let password = this.state.password;
        

            axios.post('http://localhost:5000/users/signIn', 
            {
                "userName": username,
                "password": password,

            }, 
            { 
                headers: 
                { 'Content-Type': 'application/json' }
            })
                .then(response => {
                    console.log(response.data);
                    localStorage.setItem("username" , JSON.stringify(response));
                    localStorage.setItem("usernameOne" , response.data.userName);
                    localStorage.setItem("userRollname" , response.data.userRoll.rollName);
                    if(response.data.authorize === 'Y'){
                        this.props.history.push('/dashboard');
                    }else{

                    }
                    
             })
                .catch(function (error) {
                    console.log(error);
                });
                
        }
       
    }

    validateForm() {
        console.log("hellooo");

        let username = this.state.username;
        let password = this.state.password;
        let formIsValid = true;
        let errors = {};

        if (!username) {
            formIsValid = false;
            errors["username"] = "Cannot be empty";
        }

        if(typeof username !== "undefined"){
            if(! username.match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors["username"] = "Only letters";
            }        
         }

        if (!password) {
            formIsValid = false;
            errors["password"] = "Cannot be empty";
        }

        this.setState({errors: errors});
        return formIsValid;

    }

    render() {
        return (
            <div>
                <div>
                <LoginOptions/>
                 </div>
            <Container className="mainForm">
                
                <Form  method="post" name="userSignForm" className="userSigninForm" onSubmit={this.onSubmit}>
                    <div className="shadow-lg p-3 mb-5 bg-white rounded">
                    <h1 className="text-center">Sign In </h1>
                    <FormGroup>
                        <Label>USER NAME : </Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend"><span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span></InputGroupAddon>
                            <Input type="text" placeholder="Enter Your Name" name="username" id="username" value={this.state.username} onChange={this.handleChange}> </Input>
                      </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        <Label>PASSWORD  : </Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend"><span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span></InputGroupAddon>
                            <Input type="password" name="password" name="password" id="password" value={this.state.password} onChange={this.handleChange}></Input>
                        </InputGroup>
                    </FormGroup>
                    <Button color="primary" className="btn-lg btn-block ">Sign In</Button>
                    <Link to='/sign-up'>Don't have an account? Register here</Link>
                    <span hidden="true">Please contact admin for support</span>

                    <Label></Label>
                    </div>
                   
                </Form>
            </Container>
            </div>
        );
    }
}

export default LogIn;