// import React, { useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// // import { useCookies } from 'react-cookie';


// export default function Lo() {
//   const [email_id, setemail_id] = useState('');
//   const [password, setpassword] = useState('');


//   const av = useNavigate();

//   const se = (event) => {

//     event.preventDefault();
//     try {


//       axios.post('https://crud-back-nine.vercel.app/login/', { email_id: email_id, password: password })
//       // axios.post('http://localhost:800/login/', { email_id: email_id, password: password }, { withCredentials: true })
//         .then(res => {
//           // console.log(res);
//           if (res.data.Status === "Success") {
//             console.log(res.data);
//             // setCookies("access_token" , res.data.token) ;
//             // window.localStorage.setItem("token" , res.data.token) ;
//             // window.localStorage.removeItem("token") ;
//             // window.localStorage.getItem("token");
//             // document.cookie = res.data.token;
//             // document.cookie= res.data.token;
//             av('/studs');
//           }
//           else {
//             av('/si');
//           }
//         })
//     } catch (error) {
//       console.log('error');
//     }

//   }

//   const ssid = (event) => {
//     setemail_id(event.target.value);
//   }

//   const ssed = (event) => {
//     setpassword(event.target.value);
//   }

//   return (


//     <>
//       <form onSubmit={se} className='form' >
//         <div>
//           <p id="s">EMAIL-ID : <input type="text" name="email_id" placeholder="enter your email id" onChange={ssid} /></p>
//           <p className="s">PASSWORD : <input type="password" name="password" placeholder="enter your password" onChange={ssed} /></p>
//           <button className='hover_button'>submit</button>
//           <p>Not A User :  <Link to="/si" style={{ "color": "red" }} >PLEASE SIGN-UP</Link>  </p>
//         </div>
//       </form>
//     </>
//   )
// }



import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

export default function Lo() {
  const [email_id, setemail_id] = useState('');
  const [password, setpassword] = useState('');
  const av = useNavigate();

  const se = (event) => {
    event.preventDefault();
    try {
      axios.post('https://crud-back-nine.vercel.app/login/', { email_id, password })
        .then(res => {
          if (res.data.Status === "Success") {
            av('/studs');
          } else {
            av('/si');
          }
        })
    } catch (error) {
      console.log('error');
    }
  }

  const ssid = (event) => {
    setemail_id(event.target.value);
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
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Login</h2>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Email ID</label>
          <input
            type="text"
            name="email_id"
            placeholder="Enter your email id"
            onChange={ssid}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
        <p className="text-center text-gray-600">
          Not a user?{" "}
          <Link to="/si" className="text-red-500 font-semibold hover:underline">
            Please Sign Up
          </Link>
        </p>
      </form>
    </div>
  )
}
