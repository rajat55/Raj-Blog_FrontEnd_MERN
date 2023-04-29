import React from 'react';
import Vlog_Card from './Vlog_Card';
import Form_login from './Form_login';
import From_element_content from './From_element_content';
import From_Register from './From_Register';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import CreatePost from './CreatePost';
import FullPost from './FullPost';

export default function App() {
  return (
    
        
        <BrowserRouter>
        
        <Routes>
            <Route path='/' Component={Vlog_Card}/>
            <Route exact path='/login' Component={Form_login}/>
            <Route exact path='/newpost' Component={From_element_content}/>
            <Route path='/register' Component={From_Register}/>
             <Route path='/createpost' Component={CreatePost}/>
            <Route path='/fullpost/:id' Component={FullPost}/>
       
       
        </Routes>
        </BrowserRouter>

   
  )
}
