import React from 'react'

function CardProduct({product}){
    return(
        <tr>
            <th scope="row">{product.product_id}</th>
            <th scope="row">{product.product_name}</th>
            <th scope="row">{product.product_price}</th>
            <th>
            <button type="button" class="btn btn-outline-info">Edit</button>
            <button type="button" class="btn btn-outline-danger">Hapus</button>

            </th>
        </tr>
    )
}

export default CardProduct
