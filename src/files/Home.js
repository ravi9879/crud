// import React, { useEffect, useState } from 'react'
// import axios from 'axios' 
// import Nav from './Nav'; 

// export default function Studs() {
//   const [stud, setstud] = useState([]);
//   // const user_id = window.localStorage.getItem("token") ; 
//   // const user_id = document.cookie.split(";")[1] ; //.slice(7, document.cookie[1].length))  ; 
//   const token = document.cookie;
//   const index = token.indexOf('token=') ;
//   const user_id = token.slice(index+6 , token.length) ;
//   // console.log(user_id) ;

//   useEffect(() => {
//     axios.get(`https://crud-back-nine.vercel.app/studs/${user_id}`).then((res) => { 
//     // const user = String(document.cookie.split(";")[1].slice(7, document.cookie[1].length))  ; 
//     // console.log(user) ;
//     // axios.get(`http://localhost:800/studs/${user_id}`).then((res) => {
//       setstud(res.data); 
//       // let x = document.cookie ;
//       // console.log(x.split(";")[1].slice(7, x.length) );
//       // console.log(document.cookie  ) ;
//       // console.log(x) ;
//     })
//       .catch(err => console.log(err));
//   }, [user_id])


//   return (
//     <> 
//     <Nav></Nav>
//       <div className='fox' >
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>NAME</th>
//               <th>AGE</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               stud.map((data) => (
//                 <tr key={data._id}>
//                   <td>{data.sno}</td>
//                   <td>{data.name}</td>
//                   <td>{data.age}</td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//       </div>
//     </>
//   )
// }


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from './Nav';

export default function Studs() {
  const [stud, setstud] = useState([]);
  const token = document.cookie;
  const index = token.indexOf('token=');
  const user_id = token.slice(index + 6, token.length);

  useEffect(() => {
    axios.get(`https://crud-back-nine.vercel.app/studs/${user_id}`).then((res) => {
      setstud(res.data);
    })
      .catch(err => console.log(err));
  }, [user_id])

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center py-10 px-2">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Student List</h2>
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 font-semibold text-gray-700">ID</th>
                <th className="py-3 px-4 font-semibold text-gray-700">Name</th>
                <th className="py-3 px-4 font-semibold text-gray-700">Age</th>
              </tr>
            </thead>
            <tbody>
              {stud.map((data) => (
                <tr key={data._id} className="border-b hover:bg-blue-50 transition">
                  <td className="py-2 px-4">{data.sno}</td>
                  <td className="py-2 px-4">{data.name}</td>
                  <td className="py-2 px-4">{data.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}




