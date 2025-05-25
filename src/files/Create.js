// import React ,{useState} from 'react'
// import axios from 'axios';
// import { useNavigate  } from 'react-router-dom';  
// import Nav from './Nav';

// export default function Create() {
//     const [name , setname] = useState('') ;
//     const [sno , setsno] = useState() ;
//     const [age , setage] = useState('') ;
  
//     const av = useNavigate() ;

//     // const user_id = Get_id() ; 
//     const user_id = window.localStorage.getItem("token") ; 

//     const se = async (event) => { 
//       event.preventDefault() ;
//       try{ 
//         await axios.post('https://crud-back-nine.vercel.app/create/', {sno : sno , user_id : user_id, name : name , age : age} ) 
//         // await axios.post('http://localhost:800/create/', {sno : sno , user_id : user_id, name : name , age : age} ) 
//           av('/studs');
//       }
//       catch(err){
//         console.log("error") ;
//       }
//     }


//     // const se = (event) => {
//     //   event.preventDefault() ;
//     //   axios.post('http://localhost:800/create/', {id : id , name : name , sex : sex} ) 
//     //   .then(res=> { 
//     //     console.log(res) ;
//     //     av('/studs');
//     //   }) ; 
//     // }

//     const ssid = (event)=> { 
//       setsno(event.target.value); 
//     } 

//     const mss = (event)=> { 
//       setname(event.target.value); 
//     } 
 
//     const ssed = (event)=> { 
//       setage(event.target.value); 
//     }  
    
//   return (
//       <> 
//         <Nav></Nav>
//         <form onSubmit={se} className='form' >
//           <div>
//           <p id="s">ID : <input type="text" name="sno" placeholder="enter your roll no" onChange={ssid } /></p>
//           <p className="s">NAME : <input type="text" name="name" placeholder="enter your name" onChange={ mss} /></p>
//           <p className="s">AGE : <input type="text" name="age" placeholder="enter your age" onChange={ ssed}  /></p> 
//           <button className='hover_button' >submit</button>
//           </div>
//         </form>   
//       </>
//   )
// }
 



import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

export default function Create() {
  const [name, setname] = useState('');
  const [sno, setsno] = useState('');
  const [age, setage] = useState('');
  const av = useNavigate();

  const user_id = window.localStorage.getItem("token");

  const se = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://crud-back-nine.vercel.app/create/', { sno: sno, user_id: user_id, name: name, age: age })
      av('/studs');
    }
    catch (err) {
      console.log("error");
    }
  }

  const ssid = (event) => {
    setsno(event.target.value);
  }

  const mss = (event) => {
    setname(event.target.value);
  }

  const ssed = (event) => {
    setage(event.target.value);
  }

  return (
    <>
      <Nav />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-8">
        <form
          onSubmit={se}
          className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Add Student</h2>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">ID</label>
            <input
              type="text"
              name="sno"
              placeholder="Enter your roll no"
              onChange={ssid}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={mss}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Age</label>
            <input
              type="text"
              name="age"
              placeholder="Enter your age"
              onChange={ssed}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-bold shadow hover:from-blue-600 hover:to-purple-600 transition"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}