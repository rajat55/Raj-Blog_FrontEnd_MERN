import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import './vlogcard.css';

export default function Vlog_Card() {
  const [DataArr,setDataArr] = useState([]);

const urlDomain = "https://rajatplusmern1.onrender.com/";
  useEffect(()=>{
   
    fetch('https://rajatplusmern1.onrender.com/allposts').then((r)=>{
    if(r){
      r.json().then((data)=>{
        setDataArr(data);
        //console.log(data);
    } ) 
   
  }})
    
//MuWk2EcP30rQu0Ck




  },[])

  return (
    <div>
        <Navbar/>
        { DataArr && DataArr.map((data) => (
          <>
          
          <div className="card container" >
          <div className="img-area ">
          <img src={urlDomain+data.imgUrl} className="card-img-top title-img" alt="..." style={{width:"300px",height:"250px"}} />
          </div>
          <div className="card-body ">
            <h5 className="card-title">{data.title}</h5>
            <p><span className="text-italic">{data.author.name}</span> <span>{data.updatedAt}</span></p>
            <p className="card-text">
             {data.description}
            </p>
            <Link to={`/fullpost/${data._id}`}>
            <a  className="btn btn-primary">
              Read More
            </a>
            </Link>
          </div>
        </div>
        </>


        )
        )
      }
      
    </div>
  );
}
