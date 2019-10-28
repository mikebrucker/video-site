import React from "react";

function Login({ username, password, login, handleChange }) {
  return (
    <div onSubmit={login} className="Login">
      <form action="">
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
