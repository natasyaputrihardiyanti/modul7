import React from 'react'

function CardUser({user}){
    return(
        <tr>
            <th scope="row">{user.id}</th>
            <th scope="row">{user.nama}</th>
            <th scope="row">{user.alamat}</th>
            <th>
            <button type="button" class="btn btn-outline-info">Edit</button>
            <button type="button" class="btn btn-outline-danger">Hapus</button>

            </th>
        </tr>
    )
}

export default CardUser
