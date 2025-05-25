// import React ,{useState} from 'react'
// import axios from 'axios';
// import {useNavigate } from 'react-router-dom'; 
// import Nav from './Nav';

// export default function Update() {
//     const [sno , setsno] = useState() ; 
//     const [value , setvalue] = useState('') ; 
//     const [update , setupdate] = useState('')
//     // const user_id = Get_id();

//     const user_id = window.localStorage.getItem("token") ; 
    
//     const av = useNavigate() ;

//     const se = async (event) => { 
//       event.preventDefault() ;
//       try{
//         await axios.post('https://crud-back-nine.vercel.app/update/', {update : update, user_id : user_id  ,value : value ,sno : sno } )  
//           av('/studs');
//       }
//       catch(err){
//         console.log("error") ;
//       }
//     }



//     // const se = (event) => {
//     //   event.preventDefault() ;
//     //   axios.post('http://localhost:800/update/', {update : update  ,value : value ,id : id } ) 
//     //   .then(res=> {
//     //     console.log(res) ;
//     //     av('/studs');
//     //   }) ; 
//     // }

//     const ssid = (event)=> { 
//       setsno(event.target.value); 
//     }
    
//     const ssx = (event)=> { 
//       setvalue("age"); 
//     }


//     const ssm = (event)=> { 
//       setvalue("name"); 
//     }

//     const ssu = (event)=> { 
//       setupdate(event.target.value); 
//     }
    

//     const c5 = ()=> { 
//       let t = document.getElementById('c1'); 
//       t.style.display = 'block' ;
//       let c1 = document.getElementById('c2'); 
//       c1.style.display = 'none' ;
//     }
 

//     const c4 = ()=> { 
//       let t = document.getElementById('c2'); 
//       t.style.display = 'block' ;
//       let c1 = document.getElementById('c1'); 
//       c1.style.display = 'none' ;
//     }
 

//     let c3 = {
//       display : 'none'  
//     }
 

//   return (
//       <> 
//       <Nav></Nav>
//         <form onSubmit={se} className='form'>
//           <div>
//           <p id="s">ID : <input type="text" name="sno" placeholder="enter your roll no" onChange={ssid } /></p>  
//           <p> UPDATE : NAME <input type="radio" name="value" onClick={c5}  onChange={ssm }/ > AGE <input type="radio" name="value" onClick={c4}  onChange={ssx }/> </p>
//           <p style={c3} id="c1">NAME : <input type="text" name="update" placeholder="enter updated name" onChange={ssu } /></p>  
//           <p style={c3} id="c2">AGE : <input type="text" name="update" placeholder="enter updated age" onChange={ssu } /></p>  
//           <button className='hover_button'>submit</button>
//           </div>
//         </form>   
//       </>
//   )
// }



import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

export default function Update() {
  const [sno, setsno] = useState('');
  const [field, setField] = useState('');
  const [update, setUpdate] = useState('');
  const [loading, setLoading] = useState(false);
  const user_id = window.localStorage.getItem("token");
  const av = useNavigate();

  const se = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await axios.post('https://crud-back-nine.vercel.app/update/', {
        update: update,
        user_id: user_id,
        value: field,
        sno: sno
      })
      av('/studs');
    } catch (err) {
      setLoading(false);
      console.log("error");
    }
  }

  return (
    <>
      <Nav />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-8">
        <form
          onSubmit={se}
          className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-2">Update Student</h2>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">ID</label>
            <input
              type="text"
              name="sno"
              placeholder="Enter roll no"
              onChange={e => setsno(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div>
            <span className="block text-gray-700 font-semibold mb-1">Update Field</span>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="value"
                  value="name"
                  checked={field === "name"}
                  onChange={() => setField("name")}
                  className="accent-purple-500"
                  required
                />
                <span>Name</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="value"
                  value="age"
                  checked={field === "age"}
                  onChange={() => setField("age")}
                  className="accent-purple-500"
                  required
                />
                <span>Age</span>
              </label>
            </div>
          </div>
          {field === "name" && (
            <div>
              <label className="block text-gray-700 font-semibold mb-1">New Name</label>
              <input
                type="text"
                name="update"
                placeholder="Enter updated name"
                onChange={e => setUpdate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
          )}
          {field === "age" && (
            <div>
              <label className="block text-gray-700 font-semibold mb-1">New Age</label>
              <input
                type="text"
                name="update"
                placeholder="Enter updated age"
                onChange={e => setUpdate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
          )}
          <button
            className="w-full py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-bold shadow hover:from-purple-600 hover:to-blue-600 transition"
            type="submit"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Updating...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </>
  )
}
 