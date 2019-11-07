import React from 'react';
import Utama from './BrowserRouter/Utama';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <div  className="text-center">
        <div> <hr /> <br /><br /><br />
          <ul className="navbar justify-content-end bg-light fixed-top text-left">
          <li class="nav-item">
            <a className="nav-link active bg-dark" ><Link className="text-light" to="/Home">Home</Link></a>
          </li>
          <li class="nav-item">
            <a className="nav-link active bg-info"><Link className="text-light" to="/User">User</Link></a>
          </li>
          <li class="nav-item">
            <a className="nav-link active bg-warning"><Link className="text-light" to="/Form">Form</Link></a>
          </li>
          <li class="nav-item">
            <a className="nav-link active bg-success"><Link className="text-light" to="/Product">Product</Link></a>
          </li>
          </ul>
        </div>
        <div>
          <Utama />
        </div>
        </div>
    )
  }
}

export default App;
