import React from "react";
import "./register.css";
import { NavLink } from "react-router-dom";

class Register extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.password.value);
    let user = {
      id: Date.now(),
      username: event.target.username.value,
      password: event.target.password.value,
    };
    let response = await fetch("http://localhost:3005/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(user),
    });
    console.log("response", response);
    let result = await response.json();
    if (result.userId == null) this.props.history.push("/HomePage");
    //else this.props.history.push("/Register");
    else alert("The username already exists in the repository");
    // this.props.history.push("/HomePage");
  };

  render() {
    // const { username, password } = this.state;
    return (
      <div className="flex">
        <h1>You must register</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            name="username"
            placeholder="username"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <input className="input green" type="submit" value="Register" />
          <NavLink className="text" to="/">
            Back to login
          </NavLink>
        </form>
      </div>
    );
  }
}

export default Register;
