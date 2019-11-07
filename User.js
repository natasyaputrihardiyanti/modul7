import React, {Component} from 'react';
import axios from 'axios'
import CardUser from './CardUser'

class User extends React.Component{

  constructor(){
    super()
    this.state = {
        user : []
    }
}

async componentDidMount(){
    await axios.get("http://localhost/reactapi/user.php")
    .then(response=>this.setState({
        user: response.data
    }))
    console.log(this.state)
}
    render() {
      const renderData = this.state.user.map(user=>{
        return (
            <CardUser user={user} key={user.id}/>
        )
    })
        return(
            <div className="container">
            <h2>User</h2>
            <table class="table table-light">
                <thead>
                    <tr class="table-success">
                    <th></th>
                    <th>Id</th>
                    <th></th>
                    <th >Nama</th>
                    <th></th>
                    <th >Alamat</th>
                    <th >Option</th>

                    </tr>
                </thead>
                <tbody>
                    {renderData}
                </tbody>
            </table>
        </div>
        );
    }
}
export default User;
