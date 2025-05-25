import React ,{useState} from 'react'
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';  
import Nav from './Nav';

export default function Create() {
    const [name , setname] = useState('') ;
    const [sno , setsno] = useState() ;
    const [age , setage] = useState('') ;
  
    const av = useNavigate() ;

    // const user_id = Get_id() ; 
    const user_id = window.localStorage.getItem("token") ; 

    const se = async (event) => { 
      event.preventDefault() ;
      try{ 
        await axios.post('https://crud-back-nine.vercel.app/create/', {sno : sno , user_id : user_id, name : name , age : age} ) 
        // await axios.post('http://localhost:800/create/', {sno : sno , user_id : user_id, name : name , age : age} ) 
          av('/studs');
      }
      catch(err){
        console.log("error") ;
      }
    }


    // const se = (event) => {
    //   event.preventDefault() ;
    //   axios.post('http://localhost:800/create/', {id : id , name : name , sex : sex} ) 
    //   .then(res=> { 
    //     console.log(res) ;
    //     av('/studs');
    //   }) ; 
    // }

    const ssid = (event)=> { 
      setsno(event.target.value); 
    } 

    const mss = (event)=> { 
      setname(event.target.value); 
    } 
 
    const ssed = (event)=> { 
      setage(event.target.value); 
    }  
    
  return (
      <> 
        <Nav></Nav>
        <form onSubmit={se} className='form' >
          <div>
          <p id="s">ID : <input type="text" name="sno" placeholder="enter your roll no" onChange={ssid } /></p>
          <p className="s">NAME : <input type="text" name="name" placeholder="enter your name" onChange={ mss} /></p>
          <p className="s">AGE : <input type="text" name="age" placeholder="enter your age" onChange={ ssed}  /></p> 
          <button className='hover_button' >submit</button>
          </div>
        </form>   
      </>
  )
}
 