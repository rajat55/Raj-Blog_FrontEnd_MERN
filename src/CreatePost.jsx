
import Navbar from './Navbar';
import './CreatePost.css';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';
//import MyProvider from './context';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImage] = useState('');
    const [articleValue, setarticleValue] = useState('');
    const [postCreated,setPostCreated] = useState(false);
    //const {data} = MyProvider();
     
    const submitForm =  async(e) =>{
        e.preventDefault();
        const formDataPost = new FormData();
        formDataPost.set('title',title);
        formDataPost.set('description',description);
        formDataPost.set('articleValue',articleValue);
        formDataPost.set('image',image);
        formDataPost.set('userToken',localStorage.getItem("userToken"));
       // formDataPost.set('email',data.email);
        //formDataPost.set('name',data.name);

       const ress = await fetch("https://rajatplusmern1.onrender.com/createpost",{
            method:'POST',
            
            body:formDataPost,
            credentials:'include'
            
        })
        if(ress.ok){
          setPostCreated(true);

        }


        
    }
    if(postCreated){
      return(
        <>
      <Navigate to="/"></Navigate>
      </>
      )
    }
   
    
  return (
    <div>
        <Navbar/>
    <div className='container '>
      <h1 className='text-center'>Create Your Post </h1>

    <form className='mx-auto' onSubmit={submitForm} >
  <div className="form-group">
    <label for="exampleFormControlInput1 ">Title</label>
    <input type="text" onChange={(e)=>{setTitle(e.target.value);}} value={title} className="form-control" id="exampleFormControlInput1" placeholder="Title"/>
  </div>
  
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea className="form-control" onChange={(e)=>{setDescription(e.target.value);}} value={description} id="exampleFormControlTextarea1" rows="2" placeholder='Write your Description in 50 word'></textarea>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">image</label>
    <input type="file"  onChange={(e) => {setImage(e.target.files[0]);}} className="form-control" id="exampleFormControlInput1" name="Coverimage" placeholder="img"/>
  </div>
  <ReactQuill theme="snow"  value={articleValue} onChange={newValue => setarticleValue(newValue)} />
   <button type='submit' className='btn btn-primary mt-4 justify-center '> Post</button>

</form>


    </div>
    
    
    
    
    </div>
  )
}
