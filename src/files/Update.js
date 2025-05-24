import React ,{useState} from 'react'
import axios from 'axios';
import {useNavigate } from 'react-router-dom'; 
import Nav from './Nav';

export default function Update() {
    const [sno , setsno] = useState() ; 
    const [value , setvalue] = useState('') ; 
    const [update , setupdate] = useState('')
    // const user_id = Get_id();

    const user_id = window.localStorage.getItem("token") ; 
    
    const av = useNavigate() ;

    const se = async (event) => { 
      event.preventDefault() ;
      try{
        await axios.post('https://crud-back-nine.vercel.app/update/', {update : update, user_id : user_id  ,value : value ,sno : sno } )  
          av('/studs');
      }
      catch(err){
        console.log("error") ;
      }
    }



    // const se = (event) => {
    //   event.preventDefault() ;
    //   axios.post('http://localhost:800/update/', {update : update  ,value : value ,id : id } ) 
    //   .then(res=> {
    //     console.log(res) ;
    //     av('/studs');
    //   }) ; 
    // }

    const ssid = (event)=> { 
      setsno(event.target.value); 
    }
    
    const ssx = (event)=> { 
      setvalue("age"); 
    }


    const ssm = (event)=> { 
      setvalue("name"); 
    }

    const ssu = (event)=> { 
      setupdate(event.target.value); 
    }
    

    const c5 = ()=> { 
      let t = document.getElementById('c1'); 
      t.style.display = 'block' ;
      let c1 = document.getElementById('c2'); 
      c1.style.display = 'none' ;
    }
 

    const c4 = ()=> { 
      let t = document.getElementById('c2'); 
      t.style.display = 'block' ;
      let c1 = document.getElementById('c1'); 
      c1.style.display = 'none' ;
    }
 

    let c3 = {
      display : 'none'  
    }
 

  return (
      <> 
      <Nav></Nav>
        <form onSubmit={se} className='form'>
          <div>
          <p id="s">ID : <input type="text" name="sno" placeholder="enter your roll no" onChange={ssid } /></p>  
          <p> UPDATE : NAME <input type="radio" name="value" onClick={c5}  onChange={ssm }/ > AGE <input type="radio" name="value" onClick={c4}  onChange={ssx }/> </p>
          <p style={c3} id="c1">NAME : <input type="text" name="update" placeholder="enter updated name" onChange={ssu } /></p>  
          <p style={c3} id="c2">AGE : <input type="text" name="update" placeholder="enter updated age" onChange={ssu } /></p>  
          <button className='hover_button'>submit</button>
          </div>
        </form>   
      </>
  )
}
 