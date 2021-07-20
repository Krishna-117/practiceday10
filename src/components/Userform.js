import { useState }
    from 'react'
import axios from "axios"
export default function UserForm() {

    const [userForm, setUserform] = useState({ 
        firstname: "Ram", 
        age: "20",
        joiningDate: "" }) //hook function

    const handleEvent = function (event) {
        setUserform({ ...userForm,[event.target.name]: event.target.value });
    }
    const save = function (event) {
      console.log("User first name: "+userForm.firstname);
      console.log("User age: "+userForm.age);
      const promise=axios.post("http://localhost:4200/users", userForm);
      promise.then(function(response){
          console.log(response);
      })

    }
    return (
        <div>
            <h3>Create User form</h3>
            <input placeholder='First Name' name='firstname'  value={userForm.firstname} onChange={handleEvent}>
            </input>
            <input placeholder='Age' name='age'value={userForm.age} onChange={handleEvent}></input>
            joining date: <input name='joiningDate'type="date"value={userForm.joiningDate}  onChange={handleEvent}></input>
            <button onClick={save}>Save</button>
        </div>
    );
}