import React ,{Component} from 'react';
import axios from 'axios';
import {Container, Table,Button} from 'reactstrap'
import Navigation from './navigation'

class authorize extends Component{
    constructor(props){
        super(props);
        this.state={
            userDetails: [], 
            userId:""
        }
       
        this.approveUser=this.approveUser.bind(this);
    }


    componentDidMount() {

        this.getAllUsers();

    }

    getAllUsers(){
        axios.get('http://localhost:5000//users/getUsersRequest')
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


    approveUser(e){
      
        const currentUserId= e.target.value;
        axios.get('http://localhost:5000/users/approveUser?userId='+ parseInt(currentUserId) ,
        {headers: {'Content-Type': 'application/json'}
        })
        .then(response => {
            console.log(response);
            this.getAllUsers();

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
                <h2 className="text-center">List of User to be Authorised</h2>
                
                <Container>
                    <Table>
                    <thead>
                        <tr>
                        <th>#</th>
                            <th>User Name</th>
                            <th>Authorize</th>
                        </tr>
                    </thead>
                    <tbody>
                                {this.state.userDetails.map((data, index) =>
                                   <tr key={index}>
                                       <td scope="row">{index + 1}</td>
                                       <td scope="row">{data.userName}</td>
                                       <td scope="row">
                                           <Button color="primary" onClick={this.approveUser} value={data.userId}> Approve</Button>
                                       </td>
                                    </tr>
                                )}

                    </tbody>

                    </Table>
                </Container>
            </div>
        );
    }
}

export default authorize;