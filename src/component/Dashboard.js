import React , {Component} from 'react';
import Navigation from './navigation'

import axios from 'axios'
import {Container, Table, Row, Col , Label,Button,Input,FormGroup,Form} from 'reactstrap'


class Dashboard extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            userDetails: [],
            result:[],
            userName: "",
            loginUserName: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.updateUserDetails = this.updateUserDetails.bind(this);
        this.viewPerson=this.viewPerson.bind(this);
        this.searchByName=this.searchByName.bind(this);
        this.submitsearch= this.submitsearch.bind(this);
        
    }

    componentDidMount() {

        const responseData = JSON.parse(localStorage.getItem("username"));
         this.setState({
            result : responseData.data,
            roleName: responseData.data.userRoll.rollName
         },function(){
             console.log("ress" , responseData.data.userRoll.rollName);
         })

         


        axios.get('http://localhost:5000//users/getUsersByAuthType?authType=all',)
            .then(response => {
                console.log("response" +  response);
             this.setState({
                    userDetails: response.data
             },function(){
                 console.log("userDetails",this.state.userDetails)
            })

            })
            .catch(function (error) {
                console.log(error);
            });
    }


    handleChange (e){
       let selectedOption = e.target.value;
        console.log("selectedOption***"+selectedOption);
       
      if(selectedOption === "1"){
            console.log("true");
            this.updateUserDetails("ALL");
       }
       else if(selectedOption === "2"){
        this.updateUserDetails("auth");
       }
       else if(selectedOption === "3"){
         this.updateUserDetails("unauth");
       }
    }

    updateUserDetails = (selectedOption)=>{
      console.log("slectoption",selectedOption);
        axios.get('http://localhost:5000//users/getUsersByAuthType?authType='+ selectedOption)
            .then(response => {
                console.log("response" +  response);
            this.setState({
                userDetails: response.data
            },function(){
                console.log("userDetails",this.state.userDetails)
            })

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    viewPerson(e){
        this.props.history.push('/person');
    }

    searchByName(e){
        this.setState({
            userName: e.target.value
        },function(){
            console.log(this.state.userName);
            console.log(this.state.userName.length);
        }) 
    }

    submitsearch(e){
        
        e.preventDefault();
        console.log("submit called");

        const userName=this.state.userName;
        console.log(userName);
        
        axios.get('http://localhost:5000//users/searchByName?userName='+ userName)
                .then(response => {
                    this.setState({
                        userDetails: response.data
                    })
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
            });
        

    }

    approveUser(e){
        e.preventDefault();

        
        let selectedUserId = e.target.value;
        let roleName = localStorage.getItem("userRollname");
        let isApprove=false;
        if(roleName === "admin"){
            axios.get('http://localhost:5000/users/approveUser?userId='+ parseInt(selectedUserId) ,
            {headers: {'Content-Type': 'application/json'}
            })
            .then(response => {
                console.log(response);
                this.getAllUsers();
    
            })
            .catch(function (error) {
                console.log(error);
            });
        
        }else if(roleName === " Operator"){
            axios.get('http://localhost:5000/users/approveUserRequest?userId='+ parseInt(selectedUserId)+'&isApprove='+isApprove,
            {headers: {'Content-Type': 'application/json'}
            })
            .then(response => {
                console.log(response);
    
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        
    }
   
  render(){
    
   return (
            <div className="userList">
               <Navigation name={this.state.result.userName} role={this.state.roleName}/>

                <Form inline >
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label className="FormField__Label"> All User List : </Label>
                    <select type="select" name="userlist" onChange={this.handleChange}>
                             <option value="1">All</option>
                             <option value="2">Authorize</option>
                             <option value="3">Unauthorize</option>
                    </select >
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label>Search By User Name : </Label>
                        <Input type="text" name="searchByUserName" value={this.state.userName} onChange={this.searchByName}/>
                    </FormGroup>
                 <Button color="primary" onClick={this.submitsearch} >Search</Button>
                </Form>
            
                <Container>
                    <Row>
                        <Col lg ={12}>
                    <Table  responsive hover striped bordered>
                    <thead>
                        <tr>
                        <th>#</th>
                            <th>User Name</th>
                            <th>Email Address</th>
                            <th>Phone No</th>
                            <th>Authorized</th>
                            <th>Action</th>

                        </tr>
                        </thead>
                           <tbody>
                               {this.state.userDetails.map((data, index) =>
                                   <tr key={index}>
                                       <td scope="row">{index + 1}</td>
                                       <td scope="row">{data.userName}</td>
                                       <td scope="row">{data.emailId}</td>
                                       <td scope="row">{data.mobileNo}</td>

                                       <td scope="row">
                                         {(() => {
                                            if (data.authorize === "Y") {
                                                return (
                                                    <Label>Yes</Label> 
                                                )
                                            } else if (data.authorize === "N") {
                                                return (
                                                    <Label>No</Label>
                                                )
                                            }
                                            })()} 
                                            
                                        </td>

                                       <td scope="row">
                                       {(() => {
                                          if (data.authorize === "Y") {
                                            return (
                                                <Button color="danger" size="sm">Reject </Button>
                                             )
                                         } else if (data.authorize === "N") {
                                            return (
                                                <Button color="success" value={data.userId} size="sm" onClick={this.approveUser}>Approve</Button>
                                            )
                                        }
                                         })()} 
                                         
                                           
                                        </td>
                                        
                                   </tr>)
                               }
                           </tbody>
                    </Table>
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Dashboard;