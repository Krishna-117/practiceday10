import axios from 'axios';
import { useEffect, useState } from "react"

export default function Userlist(){
    const[users,setUsers] =useState([]);
    useEffect(function(){
        console.log('called...............');
        const promise = axios.get("http://localhost:4200/users");
        promise.then(function(response){
            console.log(response.data);
        })
    })
    return (
        <div>
            <table className=' table table-bordered table-hover table-responsive table-striped'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Krishna</td>
                        <td>23</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
    
}