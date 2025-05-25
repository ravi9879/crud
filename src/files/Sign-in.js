// import React , { useState} from 'react'
// import axios from 'axios'
// import {Link, useNavigate } from 'react-router-dom';

// export default function Lo() {
//     const [name , setname] = useState('') ;
//     const [email_id , setemail_id] = useState('') ;
//     const [password , setpassword] = useState('') ;
   
//     const av = useNavigate() ;
//     const se = async (event) => { 
//       event.preventDefault() ;
//       try{
//         await axios.post('https://crud-back-nine.vercel.app/sign-in/', {email_id : email_id , name : name , password : password} ) 
//           av('/');
//       }
//       catch(err){
//         console.log("error") ;
//       }
//     }

//     const ssid = (event)=> { 
//       setemail_id(event.target.value); 
//     } 

//     const mss = (event)=> { 
//       setname(event.target.value); 
//     } 
 
//     const ssed = (event)=> { 
//       setpassword(event.target.value); 
//     }  
    
//   return (
//       <> 
//         <form onSubmit={se} className='form' >
//           <div>
//             <p id="s">EMAIL-ID : <input type="text" name="email_id" placeholder="enter your email id" onChange={ssid } /></p>
//             <p className="s">NAME : <input type="text" name="name" placeholder="enter your name" onChange={ mss} /></p>
//             <p className="s">PASSWORD : <input type="password" name="password" placeholder="enter your password" onChange={ ssed}  /></p> 
//             <button className='hover_button'>submit</button>
//             <p>Already Registered : <Link to="/" style={{"color" : "red"}} >PLEASE LOGIN</Link>  </p>
//           </div>
//         </form>   
//       </>
//   )
// }



import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [name, setname] = useState('');
  const [email_id, setemail_id] = useState('');
  const [password, setpassword] = useState('');
  const av = useNavigate();

  const se = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://crud-back-nine.vercel.app/sign-in/', {
        email_id: email_id,
        name: name,
        password: password
      });
      av('/');
    } catch (err) {
      console.log("error");
    }
  }

  const ssid = (event) => {
    setemail_id(event.target.value);
  }

  const mss = (event) => {
    setname(event.target.value);
  }

  const ssed = (event) => {
    setpassword(event.target.value);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <form
        onSubmit={se}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-2">Sign Up</h2>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Email ID</label>
          <input
            type="text"
            name="email_id"
            placeholder="Enter your email id"
            onChange={ssid}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={ssed}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>
        <button
          className="w-full py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-bold shadow hover:from-purple-600 hover:to-blue-600 transition"
          type="submit"
        >
          Submit
        </button>
        <p className="text-center text-gray-600">
          Already Registered?{" "}
          <Link to="/" className="text-red-500 font-semibold hover:underline">
            Please Login
          </Link>
        </p>
      </form>
    </div>
  )
}
