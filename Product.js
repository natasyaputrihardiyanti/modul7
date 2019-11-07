import React, {Component} from 'react';
import axios from 'axios'
import CardProduct from './CardProduct'

class Product extends React.Component{

  constructor(){
    super()
    this.state = {
        product : []
    }
}

async componentDidMount(){
    await axios.get("http://localhost/reactapi/product.php")
    .then(response=>this.setState({
        product: response.data
    }))
    console.log(this.state)
}
    render() {
      const renderData = this.state.product.map(product=>{
        return (
            <CardProduct product={product} key={product.product_id}/>
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
                    <th >Product Name</th>
                    <th></th>
                    <th >Price</th>
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
export default Product;
