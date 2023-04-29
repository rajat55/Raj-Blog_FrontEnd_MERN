import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from './Navbar';


export default function From_Register() {

  const [fromdata,setFormData] = useState({});
  const [samePass,setSamePass] = useState(false);
  const [redirect,setRedirect] = useState(false);


  function handleChange(e){

       
       const newData = {...fromdata,[e.target.name] :e.target.value};
       setFormData(newData);
       console.log(fromdata);
      
  }
  function submitdata(e){
    e.preventDefault();
    console.log(samePass);

    if(fromdata.pass !== fromdata.conPass){
        setSamePass(true);
        return;
        
    }else{
        setSamePass(false);
    }

    fetch('https://rajatplusmern1.onrender.com/register',{

        method:'post',
        headers:{'Content-Type': 'application/json'},
        body : JSON.stringify(fromdata),
        credentials:'include'

    }).then((response) => {
        if (!response.ok) {
          //throw new Error('Network response was not ok');
          alert("Registration fail Try after Some Time");
        }else{
          setRedirect(true);
         
        }
      })
  }
   if(redirect)  {return (
   <>
    <Navigate to="/login"/>
    
   </>
  )}
   else

  return (
    <div>
      <Navbar></Navbar>
        <form onSubmit={submitdata} >

        
      <div className="container d-flex justify-center">
        <div className="row _input-field">
        <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            aria-label="Enter Your Name"
            name="name"
            //value={fromdata.name}
            onChange={handleChange}
          />
          <input
            type="email"
            className="form-control"
            placeholder=" Enter email"
            aria-label="First name"
            name="email"
            //value={fromdata.email}
            onChange={handleChange}
          />

          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            aria-label="Last name"
            name="pass"
            //value={fromdata.pass}
            onChange={handleChange}
          />
           <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            aria-label="Last name"
            name="conPass"
           // value={fromdata.conPass}
            onChange={handleChange}
          />
          {samePass === true ? <p className="bg-danger">Password is Not Same</p>:" "}
          <button className="btn btn-primary" type="submit" onClick={submitdata}>Register</button>
        </div>
      </div>
      </form>
    </div>
  );
}
