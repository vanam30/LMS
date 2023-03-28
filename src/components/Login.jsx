import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import pic from "../assets/home.jpeg"

function Login() {

  const history = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let [error, setError] = useState(false)

  async function submit(e) {
    e.preventDefault();

    try {

      await axios.post("http://localhost:3000/login", {
        email, password
      })
        .then(res => {
          if (res.data === "exist") {
            history("/overview")
          }
          else if (res.data === "notexist") {
            alert("User have not sign up")
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
    <article>
      <div id="reg">
        <h3> User Login</h3>
      </div>

      <div id="photo">
        <img src={pic} alt="" />
      </div>
      <span id="lg">.</span>

      <div id="login">
        <table>
          <tr>
            <td>
              <label htmlFor="">Email id: </label>{" "}
            </td>
            <td>
              <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
              </form>
            </td>
          </tr>
          {error && email.length <= 0 ? (
            <label id="error">Email id can't be Empty</label>
          ) : (
            ""
          )}

          <tr>
            <td>
              <label htmlFor="">password: </label>
            </td>
            <td>
              <form action="POST">
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
              </form>
            </td>
          </tr>
          {error && password.length <= 0 ? (
            <label id="error">Password can't be Empty</label>
          ) : (
            ""
          )}
          <br />
          <td id="abc">
            <form action="POST">
              <input type="submit" onClick={submit} />
            </form>
            <br />
            <Link to="/forget">Forget passoword</Link>
          </td>
        </table>
        <br />

        <div id="signup">
          <section>
            <h5>Don't have an account ?</h5>
            <Link to="/reg">sign up</Link>
          </section>
        </div>
      </div>
    </article>
  );
}

export default Login
