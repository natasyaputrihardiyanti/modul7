import React, {Component} from 'react';

class Form extends Component{
    render(){
        return(
            <div className="container">
                <form >
                    <div className="form-group">
                        <label for="exampleInputEmail1">Id</label>
                        <input type="email" className="form-control" placeholder="Id" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Nama</label>
                        <input type="password" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Alamat</label>
                        <input type="password" className="form-control" placeholder="Alamat" />
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    <a type="button" className="btn btn-outline-primary" href="Home">Back</a>
                </form>

            </div>
        )
    }
}
export default Form;
