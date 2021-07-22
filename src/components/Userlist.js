import axios from "axios";
import { useEffect, useState } from "react"
import { updateUserList, deleteUserFromUI } from "../service";
export default function Userlist() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        updateUserList(response => setUsers(response.data));
    }, [])
    function deleteUser(id, index) {
    deleteUserFromUI(function(response) {
        console.log("deleted");
        //updateList();
        users.splice(index, 1);
        const newUsers = [...users];
        setUsers(newUsers);
    })
}
    const sortByAge = () => {
        users.sort((user1, user2) => user1.age - user2.age);
        setUsers([...users]);
    }
    return (
        <div>
            {/* <Counter count={users.length}></Counter> */}
            <table className=' table table-compact table-bordered table-hover table-responsive table-striped'>
                <thead>
                    <tr><th>First name</th>
                        <th onClick={sortByAge}>Age</th>
                        <th>Joining Date</th>
                        <th></th></tr>
                </thead>
                <tbody>
                    {users.map((user, index) => <tr key={user.id}>
                        <td>{user.firstname}</td>
                        <td>{user.age}</td>
                        <td>{user.joiningDate}</td>
                        <td><button className='btn btn-danger' onClick={deleteUserFromUI.bind(user.id, index)}>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}