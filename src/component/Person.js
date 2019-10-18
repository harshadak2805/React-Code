import React,{Component } from "react";
import {Container, Form, FormGroup,Button, Input, Label ,Row, Col} from 'reactstrap';
import Navigation from './navigation';
import axios from 'axios';


class Person extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            personDataFields: {}, 
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitpersonInfoForm = this.submitpersonInfoForm.bind(this);

    };


    handleChange(e) {
        let personDataFields = this.state.personDataFields;
        personDataFields[e.target.name] = e.target.value;
        this.setState({
            personDataFields
        });
    }

    submitpersonInfoForm(e){
        e.preventDefault();
        let personDataFields = {};
        personDataFields["fname"] = "";
        personDataFields["midname"] = "";
        personDataFields["lname"] = "";
        personDataFields["date"] = "";
        personDataFields["gender"] = "";
        personDataFields["age"] = "";
        personDataFields["flatname"] = "";
        personDataFields["socityname"] = "";
        personDataFields["streetname"] = "";
        personDataFields["city"] = "";
        personDataFields["state"] = "";
        personDataFields["pincode"] = "";
        personDataFields["phonenumber"] = "";
        personDataFields["mobilenumber"] = "";
        personDataFields["disability"] = "";
        personDataFields["marital"] = "";
        personDataFields["education"] = "";
        personDataFields["birthSign"] = "";

        this.setState({personDataFields: personDataFields});

            let firstName = (this.state.personDataFields["fname"]);
            let midname = (this.state.personDataFields["midname"]);
            let lname = (this.state.personDataFields["lname"]);
            let date = (this.state.personDataFields["date"]);
            let gender =(this.state.personDataFields["gender"]);
            let age = (this.state.personDataFields["age"]);
            let flatname = (this.state.personDataFields["flatname"]);
            let socityname = (this.state.personDataFields["socityname"]);
            let streetname = (this.state.personDataFields["streetname"]);
            let city = (this.state.personDataFields["city"]);
            let state = (this.state.personDataFields["state"]);
            let pincode = (this.state.personDataFields["pincode"]);
            let phonenumber = (this.state.personDataFields["phonenumber"]);
            let mobilenumber = (this.state.personDataFields["mobilenumber"]);
            let marital = (this.state.personDataFields["marital"]);
            let education = (this.state.personDataFields["education"]);
            let birthSign = (this.state.personDataFields["birthSign"]);
            let disability= (this.state.personDataFields["disability"]);
            let address= flatname+' '+socityname+' '+streetname

            console.log("firstname" ,firstName);
            console.log("midname" ,midname );
            console.log("lname" ,lname );
            console.log("gender" ,gender );
            console.log("date" ,date );
            console.log("age" ,age );
            console.log("city" ,city );
            console.log("state" ,state );
            console.log("pincode" ,pincode );
            console.log("phonenumber" ,phonenumber );
            console.log("mobilenumber" ,mobilenumber );
            console.log("marital" ,marital );
            console.log("education" ,education );
            console.log("birthSign" ,birthSign );
            console.log("address" ,address);
            console.log("disability" ,disability)


            axios.post('http://localhost:5000/persons/registerPerson', {
                "firstName": firstName,
                "lastName": lname,
                "middleName": midname,
                "dateofBirth": date,
                "gender":gender,
                "age": age,
                "address" :address,
                "city" : city,
                "state" : state,
                "pinCode" : pincode,
                "phoneNo" : phonenumber,
                "mobileNo" : mobilenumber,
                "maritalStatus" : marital,
                "educationStatus" : education,
                "birthSign" : birthSign,
                 "disability" : disability,
            }, {headers: {'Content-Type': 'application/json'}})
                .then(response => {
                    console.log(response);

                })
                .catch(function (error) {
                    console.log(error);
                });
    }


    validateRegistrationForm(){
        let fields = this.state.personDataFields;

        let formIsValid = true;

        if (!fields["fname"]) {
            formIsValid = false;
        }

        if (!fields["midname"]) {
            formIsValid = false;
        }

        if (!fields["lname"]) {
            formIsValid = false;
        }

        if (!fields["date"]) {
            formIsValid = false;
        }

        if (!fields["age"]) {
            formIsValid = false;
        }
        
        if (!fields["socityname"]) {
            formIsValid = false;
        }

        if (!fields["streetname"]) {
            formIsValid = false;
        }

        if (!fields["city"]) {
            formIsValid = false;
        }

        if (!fields["state"]) {
            formIsValid = false;
        }

        if (!fields["pincode"]) {
            formIsValid = false;
        }

        if (!fields["phonenumber"]) {
            formIsValid = false;
        }

        
        if (!fields["mobilenumber"]) {
            formIsValid = false;
        }

        if (!fields["marital"]) {
            formIsValid = false;
        }

        if(!fields["education"]){
            formIsValid=false;
        }
        if(!fields["birthSign"]){
            formIsValid=false;
        }
        if(!fields["education"]){
            formIsValid=false;
        }

        
    }

    render(){
        return(
            <div>
               <div>
                <Navigation/>
              </div>
            
            <Container>
                 <h1 className="text-center">Register Person</h1>
             <Row>
                <Form  className="personSignForm" method="post" name="personInfoForm" onSubmit={this.submitpersonInfoForm}>
                        <FormGroup>
                            <Label>First Name</Label>
                            <Input type ="text" name="fname"  value={this.state.personDataFields.fname} onChange={this.handleChange} placeholder="Enter Your First Name"/>
                        </FormGroup>
                   
                   
                        <FormGroup>
                            <Label>Middle Name</Label>
                            <Input type ="text" name="midname"  value={this.state.personDataFields.midname} onChange={this.handleChange} placeholder="Enter Your Middle Name" />
                        </FormGroup>
                    
                    
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input type ="text" name="lname"  value={this.state.personDataFields.lname} onChange={this.handleChange} placeholder="Enter Your Last Name"/>
                        </FormGroup>

                        <FormGroup tag="fieldset">
                            <Label className="genderClass">Gender </Label>

                            <FormGroup check inline>
                                <Label check>
                                <Input type="radio" name="gender"  value="F" onChange={this.handleChange}  required/>
                                Female 
                                </Label>
                            </FormGroup>

                            <FormGroup check inline>
                                <Label check>
                                <Input type="radio" name="gender" value="M" onChange={this.handleChange} required/>
                                Male 
                                </Label>
                            </FormGroup>
                        </FormGroup>
            
                    <FormGroup>
                    <Label for="exampleDate">Date of Birth</Label>
                         <Input type="date" name="date" value={this.state.personDataFields.date} onChange={this.handleChange} id="exampleDate" placeholder="date placeholder"/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Age</Label>
                        <Input type="text" name="age"  value={this.state.personDataFields.age} onChange={this.handleChange} placeholder="Enter Your Age"/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Address</Label>
                        <Row form>
                            <Col md={4}>
                            <FormGroup>
                                <Label>Flat/Bunglow No</Label>
                                <Input type ="text" name="flatname"  value={this.state.personDataFields.flatname} onChange={this.handleChange} placeholder="Enter Your Addres"/>
                            </FormGroup>
                            </Col>

                            <Col md={4}>
                            <FormGroup>
                                <Label> Society Name </Label>
                                <Input type ="text" name="socityname"  value={this.state.personDataFields.socityname} onChange={this.handleChange} placeholder="Enter Your Society"/>
                            </FormGroup>
                            </Col>

                            <Col md={4}>
                            <FormGroup>
                                <Label> Street Name/Area Name </Label>
                                <Input type ="text" name="streetname"  value={this.state.personDataFields.streetname} onChange={this.handleChange} placeholder="Enter Your Street Name"/>
                            </FormGroup>
                            </Col>

                        </Row>
                    </FormGroup>

                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label>City</Label>
                                <Input type ="text" name="city"  value={this.state.personDataFields.city} onChange={this.handleChange} placeholder="Enter Your City"/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label>State</Label>
                                <Input type ="text" name="state"  value={this.state.personDataFields.state} onChange={this.handleChange} placeholder="Enter Your state"/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label>Pin Code</Label>
                                <Input type ="text" name="pincode" value={this.state.personDataFields.pincode} onChange={this.handleChange} placeholder="Enter Your Pincode"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Phone No </Label>
                                <Input type ="number" name="phonenumber" value={this.state.personDataFields.phonenumber} onChange={this.handleChange} placeholder="Enter Your Phone No"/>
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label>Mobile No </Label>
                                <Input type ="number" name="mobilenumber" value={this.state.personDataFields.mobilenumber} onChange={this.handleChange} placeholder="Enter Your Mobile"/>
                            </FormGroup>
                        </Col>

                    </Row>

                    <FormGroup>
                        <Label>Physical Disability If Any</Label>
                        <Input type ="text" name="disability" value={this.state.personDataFields.disability} onChange={this.handleChange} placeholder="Enter Your disability"/>
                    </FormGroup>

                    <FormGroup>
                        <Label > Marital Status</Label>
                         <Input type="select" name="marital" value={this.state.personDataFields.maritalstatus} onChange={this.handleChange}>
                             <option>Married</option>
                             <option>Unmarried</option>
                             <option>Divorced</option>
                             <option>Widow</option>
                             <option>Widower</option>
                         </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label >Education Status</Label>
                         <Input type="select" name="education" value={this.state.personDataFields.educationstatus} onChange={this.handleChange}>
                             <option>Masters</option>
                             <option>Phd</option>
                             <option>Graduate</option>
                             <option>Under-Graduate</option>
                             <option>HSC</option>
                             <option>SSC</option>
                             <option>Illiterate</option>
                         </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label> Birth Sign if Any</Label>
                        <Input type= "text" name="birthSign" value={this.state.personDataFields.birthsign} onChange={this.handleChange} />
                    </FormGroup>

                    <Button color="primary">Register Patient</Button>

                </Form>
                </Row>
            </Container>
            </div>
          
            
        );
    }
}

export default Person;