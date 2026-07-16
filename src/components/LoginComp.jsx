import axios from "axios";
import { useState } from "react";

const LoginComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "free_user_3GaOTtm5uqF4UFM6krdzJ715jo9",
        },
      };
      const res = axios.post(
        "https://reqres.in/api/login",
        { email: email, password: password },
        config,
      );
      console.log("res", res);
      if (res.status == 201 || res.status == 200) {
        alert("Login successful");
      }
    } catch (error) {
      console.log("err", error);
      alert("Something went wrong");
    }
  };
  return (
    <div style={{ padding: "50px" }}>
      <input
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="Password"
        style={{ marginLeft: "20px" }}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        style={{ marginLeft: "20px" }}
        onClick={() => {
          handleLogin();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginComp;
