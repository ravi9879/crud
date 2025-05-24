import React ,{useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  
import Nav from './Nav';

export default function Update() {
    const [sno , setsno] = useState() ;  
    // const user_id = Get_id();
    const user_id = window.localStorage.getItem("token") ; 
  
    const av = useNavigate() ;
 
    const se = async (event) => { 
      event.preventDefault() ;
      try{

        await axios.post('https://crud-back-nine.vercel.app/delete/', {sno : sno, user_id : user_id }  )
          // console.log()
          av('/studs');
      }
      catch(err){
        console.log("error") ;
      }
    }



    // const se = (event) => {
    //   event.preventDefault() ;
    //   axios.post('http://localhost:800/delete/', {id : id } ) 
    //   .then(res=> {
    //     console.log(res) ;
    //     av('/studs');
    //   }) ;  
    // }
    
    const ssid = (event)=> { 
      setsno(event.target.value); 
    }   
    
  return (
      <> 
      <Nav></Nav> 
        <form onSubmit={se} >
          <div>
          <p id="s">ID : <input type="text" name="sno" placeholder="enter your roll no" onChange={ssid } /></p> 
          <button className='hover_button' >submit</button>
          </div>
        </form>   
      </>
  )
}

// onClick={se}