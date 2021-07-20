import { useState }
    from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
export default function UserForm() {

    const [userForm, setUserform] = useState({  //statefull
        firstname: "",
        age: "",
        joiningDate: "",
        skill: ""
    }) //hook function

    const handleEvent = function (event) {
        setUserform({ ...userForm, [event.target.name]: event.target.value });
    }
    const handleEvent2 = function (event) {
        setUserform({ ...userForm, "skill": event });
        
    }
        const save = function (event) {
        console.log("User first name: " + userForm.firstname);
        console.log("User age: " + userForm.age);
        const promise = axios.post("http://localhost:4200/users", userForm);
        promise.then(function (response) {
            console.log(response);
        })

    }
    return (
        <div>
            <h3>Create User form</h3>
            <div className='form-group'>
                <input placeholder='First Name' name='firstname' className='form-control' value={userForm.firstname} onChange={handleEvent}>
                </input>
            </div>
            <input placeholder='Age' type='number' name='age' value={userForm.age} className='form-control' onChange={handleEvent}></input>
            <label htmlFor='joiningDate'>Joining date:</label>
            <div className='form-group'>
                <input name='joiningDate' type="date" value={userForm.joiningDate} className='form-control' onChange={handleEvent}></input>
            </div>
            <br />
            {<select name='skill' value={userForm.skill} onChange={handleEvent}>
                <option>Select the Skill</option>
                <option>HTML</option>
                <option>JS</option>
                <option>CSS</option>
            </select>}
            
            <br />
            <div className='form-group'>
                <Button onClick={save} className='form-control'>Save</Button>
            </div>

        </div>
    );
}