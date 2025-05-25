import React, { useEffect, useState } from 'react'
import axios from 'axios' 
import Nav from './Nav'; 

export default function Studs() {
  const [stud, setstud] = useState([]);
  // const user_id = window.localStorage.getItem("token") ; 
  // const user_id = document.cookie.split(";")[1] ; //.slice(7, document.cookie[1].length))  ; 
  const token = document.cookie;
  const index = token.indexOf('token=') ;
  const user_id = token.slice(index+6 , token.length) ;
  // console.log(user_id) ;

  useEffect(() => {
    axios.get(`https://crud-back-nine.vercel.app/studs/${user_id}`).then((res) => { 
    // const user = String(document.cookie.split(";")[1].slice(7, document.cookie[1].length))  ; 
    // console.log(user) ;
    // axios.get(`http://localhost:800/studs/${user_id}`).then((res) => {
      setstud(res.data); 
      // let x = document.cookie ;
      // console.log(x.split(";")[1].slice(7, x.length) );
      // console.log(document.cookie  ) ;
      // console.log(x) ;
    })
      .catch(err => console.log(err));
  }, [user_id])


  return (
    <> 
    <Nav></Nav>
      <div className='fox' >
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
            </tr>
          </thead>
          <tbody>
            {
              stud.map((data) => (
                <tr key={data._id}>
                  <td>{data.sno}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}