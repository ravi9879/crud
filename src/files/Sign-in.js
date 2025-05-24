import React , { useState} from 'react'
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom';

export default function Lo() {
    const [name , setname] = useState('') ;
    const [email_id , setemail_id] = useState('') ;
    const [password , setpassword] = useState('') ;
   
    const av = useNavigate() ;
    const se = async (event) => { 
      event.preventDefault() ;
      try{
        await axios.post('https://crud-back-nine.vercel.app/sign-in/', {email_id : email_id , name : name , password : password} ) 
          av('/');
      }
      catch(err){
        console.log("error") ;
      }
    }

    const ssid = (event)=> { 
      setemail_id(event.target.value); 
    } 

    const mss = (event)=> { 
      setname(event.target.value); 
    } 
 
    const ssed = (event)=> { 
      setpassword(event.target.value); 
    }  
    
  return (
      <> 
        <form onSubmit={se} className='form' >
          <div>
            <p id="s">EMAIL-ID : <input type="text" name="email_id" placeholder="enter your email id" onChange={ssid } /></p>
            <p className="s">NAME : <input type="text" name="name" placeholder="enter your name" onChange={ mss} /></p>
            <p className="s">PASSWORD : <input type="password" name="password" placeholder="enter your password" onChange={ ssed}  /></p> 
            <button className='hover_button'>submit</button>
            <p>Already Registered : <Link to="/" style={{"color" : "red"}} >PLEASE LOGIN</Link>  </p>
          </div>
        </form>   
      </>
  )
}
