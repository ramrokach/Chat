import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";

class Login extends React.Component {
  //   state = { username: null, password: null };

  //   handleUsernameChange = (event) => {
  //     this.setState({ username: event.target.value });
  //   };

  //   handlePasswordChange = (event) => {
  //     this.doNothing();
  //     this.setState({ password: event.target.value });
  //   };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.password.value);
    let user = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    let response = await fetch("http://localhost:3005/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(user),
    });
    console.log("response", response);
    let result = await response.json();
    //console.log(result);
    if (result.userId) this.props.history.push("/HomePage");
    //else this.props.history.push("/Register");
    else alert("The username is not in the repository")
  };
  //   TODO ESLint - to config airbnb style :)

  doNothing() {}

  render() {
    return (
      <div className="flex">
      <h1>Hello everyone please sign in to your account</h1>
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
        <input className="input green" type="submit" value="Login" />
        <NavLink className="text" to="/register">Not registered? Create an account</NavLink>
      </form>
      </div>
    );
  }
}

export default Login;
