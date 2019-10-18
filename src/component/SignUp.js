
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Container, Button, Form, FormGroup, Label, Input ,InputGroup, InputGroupAddon} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock,faUser,faAddressBook,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import LoginOptions from './loginOptions'

class SignUp extends Component {

    constructor(props){
        super(props)
        this.state= {
            fields : {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserSignUpForm = this.submituserSignUpForm.bind(this);
    }


    handleChange(e) {
        let fields = this.state.fields;

        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    submituserSignUpForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["userName"] = "";
            fields["emailAddress"] = "";
            fields["password"] = "";
            fields["mobile_number"] = "";
            fields["user_roll"] = ""
            fields["authorize"] = ""
            this.setState({fields: fields});
        
            let userName = (this.state.fields["userName"]);
            let emailAddress = (this.state.fields["emailAddress"]);
            let password = (this.state.fields["password"]);
            let mobile_number = (this.state.fields["mobile_number"]);
            let user_roll = (this.state.fields["user_roll"]);
            let authorize = (this.state.fields["authorize"]);


            console.log("filedsss",fields);
            console.log("username" + userName )

            console.log("emailAddress" + emailAddress )

            console.log("password" + password )
            console.log("mobile_number" + mobile_number )
            console.log("authorize" + authorize )

            console.log("user_roll" + user_roll)
           
         
            axios.post('http://localhost:5000/users/signUp', {
                "userName": userName,
                "emailId": emailAddress,
                "password": password,
                "mobileNo": mobile_number,
                "authorize": "N",
                "approveuser" : false,
                "userRoll" : {
                    "rollId":parseInt(user_roll)
                }
             
            }, {headers: {'Content-Type': 'application/json'}})
                .then(response => {

                })
                .catch(function (error) {
                    console.log(error);
                });
            
        }
    }


    validateForm() {
        let fields = this.state.fields;
        let formIsValid = true;

        if (!fields["userName"]) {
            formIsValid = false;
        }

        if (!fields["password"]) {
            formIsValid = false;
        }

        if (!fields["mobile_number"]) {
            formIsValid = false;
        }

        if (!fields["emailAddress"]) {
            formIsValid = false;
        }
        if (typeof fields["emailAddress"] !== "undefined") {
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailAddress"])) {
                formIsValid = false;
            }
        }
        return formIsValid;

    }


    render() {
        return (
            <div>
           
                <div>
                <LoginOptions/>
                 </div>
           <Container className="mainForm">
                <Form className="userSignForm" method="post" name="userSignUpForm" onSubmit={this.submituserSignUpForm}>
                    <div className="shadow-lg p-3 mb-5 bg-white rounded">
                    <h1 className="text-center">Sign Up</h1>
                    <FormGroup>
                        <Label>USER NAME : </Label>
                        <InputGroup>
                           <InputGroupAddon addonType="prepend"><span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span></InputGroupAddon>
                           <Input type="text" name="userName"  value={this.state.fields.userName} onChange={this.handleChange} placeholder="Enter Your Name" />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>

                        <div className="FormField">
                            <Label className="FormField__Label"> E-MAIL ADDRESS : </Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend"><span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span></InputGroupAddon>
                                <Input type="email" name="emailAddress" value={this.state.fields.emailAddress} onChange={this.handleChange} placeholder="Enter Your Email" className="FormField__Input" />
                            </InputGroup>
                        </div >
                    </FormGroup>
                    <FormGroup>

                        <div className="FormField">
                            <Label className="FormField__Label"> PASSWORD  : </Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend"><span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span></InputGroupAddon>
                                <Input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} className="FormField__Input" />
                            </InputGroup> 
                        </div>

                    </FormGroup>

                    <FormGroup>
                        <div className="FormField">
                            <Label className="FormField__Label"> Phone : </Label>
                            <InputGroup>
                            <InputGroupAddon addonType="prepend"><span className="input-group-text"><FontAwesomeIcon icon={faPhone} /></span></InputGroupAddon>
                            <Input type="number" name="mobile_number" value={this.state.fields.mobile_number} onChange={this.handleChange} placeholder="Enter Your Phone" className="FormField__Input" />
                            </InputGroup>
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <div className="FormField">
                            <Label className="FormField_select"> User Role : </Label>
                            <select  type="select" name="user_roll" value={this.state.fields.user_roll} onChange={this.handleChange} className="FormField__Input">
                            <option value="1">Admin</option>
                            <option value="2">AccessUser</option>
                            <option value="3">Operator</option>
                            </select >
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Button color = "primary" className="btn-lg btn-block"> Sign Up</Button>
                        <Link to= '/'>Already Have account ? </Link>
                    </FormGroup>
                    </div>

                </Form>

            </Container>
            </div>

        );
    }

}

export default SignUp;