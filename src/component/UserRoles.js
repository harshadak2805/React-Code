import React , {Component} from 'react';
import {Container, FormGroup,Form,Label, Input,Button,Table,Row,Col } from 'reactstrap';
import axios from 'axios'
import Navigation from './navigation'


class UserRoles extends Component{
    constructor(props){
        super(props);

        this.state=({
            userRollName :"",
        })
        this.handleChange=this.handleChange.bind(this);
        this.SubmitRole= this.SubmitRole.bind(this);
    }

    handleChange(e){

        this.setState({
            userRollName: e.target.value
        })
    }

    SubmitRole(e){

        e.preventDefault();

        let userRoll= this.state.userRollName;
        console.log("userroll" + userRoll);

        axios.post('http://localhost:5000/userRoll/createRole', {
                "roll_name": userRoll
               
            }, { headers: { 'Content-Type': 'application/json' }})
                .then(response => {
                    console.log("added sucessfulyy", response);

                })
                .catch(function (error) {
                    console.log(error);
                });
        

    }

    render(){
        return (
            <div>
               <div>
                <Navigation/>
              </div>
            
            <Container>
                 <h1 className="text-center">Add Roll</h1>
                <Form className="FormFields" onSubmit={this.SubmitRole}>
                    <FormGroup>
                          <Label className="FormField__Label"> Enter Role Name : </Label>
                          <Input type="text" name="userRollName" id="userRollName" value={this.state.userRollName} onChange={this.handleChange}/>
                    </FormGroup>
                    <Button color="primary"> Add Roll</Button>
                </Form>
                <Table>
                    <thead>
                        
                    </thead>

                </Table>
            </Container>
            </div>
        );
    }
}

export default UserRoles;