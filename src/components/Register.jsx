import React, { useState } from 'react';
import axios from "axios";
import "./register.css"
import pic from "../assets/Login.jpg"
import { useNavigate, Link } from "react-router-dom"

const NewRegister = () => {

    let [Fullname, setFullname] = useState("");
    const history = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let [Phonenumber, setPhonenumber] = useState("");
    let [dob, setdob] = useState("");
    let [gender, setgender] = useState("");
    let [Rewritepassword, setrewritepassword] = useState("");
    let [error, setError] = useState(false)
    let Navigate = useNavigate();

    let NameData = (e) => {
        setFullname(e.target.value);
    }
    let mailData = (e) => {
        setEmail(e.target.value)
    }
    let phoneData = (e) => {
        setPhonenumber(e.target.value)
    }
    let dobData = (e) => {
        setdob(e.target.value)
    }
    let genderData = (e) => {
        setgender(e.target.value)
    }
    let passwordData = (e) => {
        setPassword(e.target.value)
    }
    let RewritepasswordData = (e) => {
        setrewritepassword(e.target.value)
    }

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/reg", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        alert("User already exists")
                    }
                    else if (res.data === "notexist") {
                        history("/login")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }
    return (
        <section>
           
            <div id='nav'>
            <h3 > User Registration Portal</h3>
            </div>
            <br /><br />
            <div id='l1'>
                <img src={pic} alt="" />
            </div>

            <div id='new'>
                <table>
                    <tr>
                        <td><label htmlFor="">User Name : </label></td>
                        <td><input type="text" placeholder='User name' value={Fullname} onChange={NameData} required="required" /></td>
                    </tr>
                    {error && Fullname.length <= 0 ?
                        <label id='error'>User Name can't be Empty</label> : ""}
                    <tr>
                        <td><label htmlFor="">Company Id : </label></td>
                        <td>
                            <input type="number" placeholder='Id Number' value={gender} onChange={genderData} required="required" />
                        </td>
                    </tr>
                    {error && email.length <= 0 ?
                        <label id='error'>Company id can't be Empty</label> : ""}
                    <tr>
                        <td><label htmlFor="">Email Id : </label></td>
                        <td>
                            <form action="POST">
                                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                            </form>
                        </td>
                    </tr>
                    {error && email.length <= 0 ?
                        <label id='error'>Email id can't be Empty</label> : ""}
                    <tr>
                        <td><label htmlFor="">Phone Number : </label></td>
                        <td><input type="number" placeholder='contact number' value={Phonenumber} onChange={phoneData} required="required" /></td>
                    </tr>
                    {error && Phonenumber.length <= 0 ?
                        <label id='error'> Number can't be Empty</label> : ""}
                    <tr>
                        <td><label htmlFor="">D.O.B : </label></td>
                        <td><input type="date" value={dob} onChange={dobData} required="required" /></td>
                    </tr>
                    {error && dob.length <= 0 ?
                        <label id='error'>DOB can't be Empty</label> : ""}
                    <tr>
                        <td><label htmlFor="">Password : </label></td>
                        <td>
                            <form action="POST">
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                            </form>
                        </td>
                    </tr>
                    {error && password.length <= 0 ?
                        <label id='error'>Password can't be Empty</label> : ""}
                    <td id='def'>
                        <form action="POST">
                        <input type="submit" onClick={submit} />
                        </form>
                    </td>
                </table>
            </div>
        </section>
    )
}

export default NewRegister
