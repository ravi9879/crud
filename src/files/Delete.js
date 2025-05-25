// import React ,{useState } from 'react'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';  
// import Nav from './Nav';

// export default function Update() {
//     const [sno , setsno] = useState() ;  
//     // const user_id = Get_id();
//     const user_id = window.localStorage.getItem("token") ; 
  
//     const av = useNavigate() ;
 
//     const se = async (event) => { 
//       event.preventDefault() ;
//       try{

//         await axios.post('https://crud-back-nine.vercel.app/delete/', {sno : sno, user_id : user_id }  )
//           // console.log()
//           av('/studs');
//       }
//       catch(err){
//         console.log("error") ;
//       }
//     }



//     // const se = (event) => {
//     //   event.preventDefault() ;
//     //   axios.post('http://localhost:800/delete/', {id : id } ) 
//     //   .then(res=> {
//     //     console.log(res) ;
//     //     av('/studs');
//     //   }) ;  
//     // }
    
//     const ssid = (event)=> { 
//       setsno(event.target.value); 
//     }   
    
//   return (
//       <> 
//       <Nav></Nav> 
//         <form onSubmit={se} >
//           <div>
//           <p id="s">ID : <input type="text" name="sno" placeholder="enter your roll no" onChange={ssid } /></p> 
//           <button className='hover_button' >submit</button>
//           </div>
//         </form>   
//       </>
//   )
// }

// // onClick={se}



import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

export default function Delete() {
  const [sno, setsno] = useState('');
  const user_id = window.localStorage.getItem("token");
  const av = useNavigate();

  const se = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://crud-back-nine.vercel.app/delete/', { sno: sno, user_id: user_id })
      av('/studs');
    } catch (err) {
      console.log("error");
    }
  }

  const ssid = (event) => {
    setsno(event.target.value);
  }

  return (
    <>
      <Nav />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-8">
        <form
          onSubmit={se}
          className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-red-600 mb-2">Delete Student</h2>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">ID</label>
            <input
              type="text"
              name="sno"
              placeholder="Enter roll no"
              onChange={ssid}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>
          <button
            className="w-full py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-bold shadow hover:from-red-600 hover:to-pink-600 transition"
            type="submit"
          >
            Delete
          </button>
        </form>
      </div>
    </>
  )
}