import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [userName,setUserName] = useState(null);

useEffect ( ()=>{
  console.log("useEffect");
  fetch('https://rajatplusmern1.onrender.com/profile',{
    method:'post',
    headers :{'Content-Type': 'application/json'},
    body: JSON.stringify({userToken:localStorage.getItem("userToken")}),  
  credentials:"include"})
  .then((response) =>{
    if(response){
      console.log("useEffect res");
          response.json().then((data) =>{
            if(data){
              console.log(data);
              if(data.sucess)
              setUserName(data.name);
            }
          });
    }
  })
},[userName]);

const doLogout = () =>{
  console.log("doLogout");
  localStorage.setItem("userToken","");
  fetch('https://rajatplusmern1.onrender.com/logout',{credentials:"include"}).then((response)=>{
    if(response){
      response.json().then((data) =>{
        if(data){
          console.log(data);
          setUserName(null);

        }
      })
    }
  })
}

  return (
    <div className="bg-light">
      <nav className="navbar navbar-expand-lg bg-body-tertiary container ">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>Raj-Vlogs</Link>
          
          <div className="right-nav d-flex ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            

              {userName === null ?
              (
                <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" to='/'>Home</Link>
                  
                </li>
                <li className="nav-item">
                 
                <Link className="nav-link" to='/login'>Login</Link>
                  
                </li>
                </ul>
              ):
              (<ul className="navbar-nav">
              <li className="nav-item">
              <Link className="nav-link active" to='/createpost'>Create Post</Link>
                
              </li>
              <li className="nav-item">
              <Link className="nav-link active" onClick={doLogout} to='/'>Logout</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to='/login'>{userName}</Link>
                
              </li>
              </ul>)
              
              }
              
            
           
            </div>
          </div>
        </div>
      </nav>
    </div>
    
  );
}
