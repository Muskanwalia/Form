import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const initialState = {
    name: "",
    password: "",
  }
  const [userInfo, setUserInfo] = useState(initialState);

  //  const[name,setName] = useState("");
  //  const[password,setPassword] = useState("");

  const signUp = () => {
    console.log(userInfo);
    setUserInfo(initialState)
  };

  return (
    <>
      <div className="box">
        <form>
          <input
            type="text"
            value={userInfo.name}
            placeholder="Enter username"
            name="name"
            onChange={(e) =>
              setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
            }></input>
          <input
            type="password"
            value= {userInfo.password}
            placeholder="Enter password"
            name="password"
            onChange={(e) =>
              setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
            }></input>
          <br />
          <button type="button" onClick={signUp}>
            {" "}
            Signup{" "}
          </button>
          <br />
          <button type="button"> Login </button>
        </form>
      </div>
    </>
  );
};

export default App;
