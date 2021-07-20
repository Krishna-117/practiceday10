import { useState } from "react"
import axios from "axios";
import { useEffect, useState } from "react"

export default function Userlist() {
    const [users, setUsers] = useState([]);
    useEffect(function () {
        if(users.length !=0){
            return;
        }
        console.log('called......................');
        const promise = axios.get("http://localhost:4200/users");
        promise.then(function (response) {
            setUsers(response.data);
            console.log(response.data);
        })
    })
    return (
        <div>
            <table className=' table table-bordered table-hover table-responsive'>
            <table className=' table table-bordered table-hover table-responsive table-striped'>
                <thead>
                    <tr><td>First name</td>
                    <td>Age</td></tr>
                    <tr><th>First name</th>
                        <th>Age</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pariwesh</td>
                        <td>34</td>
                    </tr>
                    {users.map(function (user, index) {
                        return <tr>
                            <td>{user.firstname}</td>
                            <td>{user.age}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>