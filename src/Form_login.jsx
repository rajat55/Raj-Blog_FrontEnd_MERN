import React, { useState } from "react";
import "./Form_login.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import MyProvider from "./context";

export default function Form_login() {

  const [loginData,setLoginData] = useState({});
  const [ifLogin ,setifLogin] = useState(false);
  const {data,setData} = MyProvider;

  function handleChange(e){

    const newLoginData = {...loginData,[e.target.name]:e.target.value};
    setLoginData(newLoginData);
    console.log(newLoginData);

  }
  async function submitForm(e){
       e.preventDefault();
       const response = await fetch("https://rajatplusmern1.onrender.com/login",{
        method:'post',
        headers :{'Content-Type': 'application/json'},
        body: JSON.stringify(loginData),
        credentials:"include"

       });

       const resJson = await response.json();
       console.log(resJson);
       
       if(resJson.Sucess === true){
        setifLogin(true);
        const {userToken} = resJson;
        localStorage.setItem("userToken",userToken);
        setData({name:resJson.name,
        email:resJson.email});
       }else{
        alert("Wrong Credentials");
       }

       


  }

  if(ifLogin){
    return(
      <>
      <Navigate to="/"></Navigate>
      </>
    )
  }

  return (
    <>
    <Navbar/>
    <div className="container d-flex justify-center flex-column">
      <div className="row _input-field flex-column">
        <input
          type="email"
          className="form-control"
          placeholder="email"
          aria-label="First name"
          name="email"
          onChange={handleChange}
        />

        <input
          type="password"
          className="form-control"
          placeholder="password"
          name="password"
          aria-label="Last name"
          onChange={handleChange}
        />
        </div>
        <div className="d-flex flex-column _input-field justify-center ">        
        <button className="btn btn-primary form-control " onClick={submitForm} >Login</button>
      
      <p>Does Not Have Account <Link to="/register">Register</Link></p>
      </div>

    </div>
    </>
  );
}
