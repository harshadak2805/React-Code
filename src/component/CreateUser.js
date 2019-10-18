import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios'
import Navigation from './navigation'


class CreateUser extends Component{
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
            //fields["authorize"] = ""
            this.setState({fields: fields});
        
            let userName = (this.state.fields["userName"]);
            let emailAddress = (this.state.fields["emailAddress"]);
            let password = (this.state.fields["password"]);
            let mobile_number = (this.state.fields["mobile_number"]);
            let user_roll = (this.state.fields["user_roll"]);
            //let authorize = (this.state.fields["authorize"]);


            console.log("filedsss",fields);
            console.log("username" + userName )

            console.log("emailAddress" + emailAddress )

            console.log("password" + password )
            console.log("mobile_number" + mobile_number )
           

            console.log("user_roll" + user_roll)

            let roleName = localStorage.getItem("userRollname");
            let approveuser ;
            let authorize;
            

            if(roleName === "admin"){
                approveuser =true
                authorize="Y"
            }else if(roleName === " Operator"){
                approveuser =false
                authorize="N"
            }
           
         
            axios.post('http://localhost:5000/users/signUp?authType=unauth', {
                "userName": userName,
                "emailId": emailAddress,
                "password": password,
                "mobileNo": mobile_number,
                "authorize": authorize,
                "approveuser " : approveuser,
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
                <Navigation/>
            </div>
      
           <Container className="mainForm">

                <Form className="createUserForm" method="post" name="userSignUpForm" onSubmit={this.submituserSignUpForm}>
                    <h1 className="text-center">Add User</h1>
                
                   
                    <FormGroup>
                        <Label>USER NAME : </Label>
                        <Input type="text" name="userName" value={this.state.fields.userName} onChange={this.handleChange} placeholder="Enter Your Name" />
                    </FormGroup>
                    <FormGroup>

                        <div className="FormField">
                            <Label className="FormField__Label"> E-MAIL ADDRESS : </Label>
                            <Input type="email" name="emailAddress" onChange={this.handleChange} value={this.state.fields.emailAddress} placeholder="Enter Your Email" className="FormField__Input" />
                        </div >
                    </FormGroup>
                    <FormGroup>
                        <div className="FormField">
                            <Label className="FormField__Label"> PASSWORD  : </Label>
                            <Input type="password" name="password" value={this.state.fields.password}  onChange={this.handleChange} className="FormField__Input" />
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <div className="FormField">
                            <Label className="FormField__Label"> PHONE NO : </Label>
                            <Input type="number" name="mobile_number" onChange={this.handleChange} value={this.state.fields.mobile_number} placeholder="Enter Your Phone" className="FormField__Input" />
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <div className="FormField">
                            <Label className="FormField_select"> USER ROLL : </Label>
                            <select  type="select" name="user_roll" value={this.state.fields.user_roll}  onChange={this.handleChange} className="FormField__Input">
                            <option value="1">Admin</option>
                            <option value="2">AccessUser</option>
                            <option value="3">Operator</option>
                            </select >
                        </div>
                    </FormGroup>


                   

                    {/* <FormGroup>
                        <div className="FormField">
                            <Label className="FormField_select"> AUTHORIZE : </Label>
                            <select  name="authorize" value={this.state.fields.authorize} onChange={this.handleChange} className="FormField__Input">
                            <option value="Y">Yes</option>
                            <option value="N">No</option>
                            </select >
                        </div>
                    </FormGroup> */}
                    <FormGroup>
                        <Button color = "primary" className="btn-lg btn-block"> Add User</Button>
                    </FormGroup>
                    

                </Form>

            </Container>
            </div>

        );
    }
}

export default CreateUser;