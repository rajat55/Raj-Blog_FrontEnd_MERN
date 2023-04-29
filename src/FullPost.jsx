import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

export default function FullPost() {
  const { id } = useParams();
  const [dataP, setDataP] = useState(null);
  //console.log(id);

  useEffect(() => {
    fetch(`https://rajatplusmern1.onrender.com/fullpost/${id}`).then((res) => {
    if(res){  
    res
        .json()
        .then((data) => {
          //console.log("data",data);
          const newData = {...data}
           setDataP(newData);
          console.log(dataP.author.name);
        })
        .catch((e) => console.log(e));
    }
    });
  
  }, [id]);


  return (
    <div>
      <Navbar></Navbar>
      <div className="container text-center">
        <h2>{dataP?.title}</h2>
        <img src={"https://rajatplusmern1.onrender.com/"+dataP?.imgUrl} style={{width:"100%",height:"400px"}} alt="" />
        <p className="mt-4">
           <i> Posted by -{dataP?.author.name}</i>
            <br />
            <i>
            Posted at -{dataP?.createdAt}
            </i>
        </p>
        <hr />
       

        <div
        dangerouslySetInnerHTML={{ __html: dataP?.article }} 
        />
      </div>
     
      
      
    </div>
  );
}
