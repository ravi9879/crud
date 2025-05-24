import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { useCookies } from 'react-cookie';


export default function Lo() {
  const [email_id, setemail_id] = useState('');
  const [password, setpassword] = useState('');


  const av = useNavigate();

  const se = (event) => {

    event.preventDefault();
    try {


      // axios.post('https://crud-back-nine.vercel.app/login/', { email_id: email_id, password: password })
      axios.post('http://localhost:800/login/', { email_id: email_id, password: password }, { withCredentials: true })
        .then(res => {
          // console.log(res);
          if (res.data.Status === "Success") {
            console.log(res.data);
            // setCookies("access_token" , res.data.token) ;
            // window.localStorage.setItem("token" , res.data.token) ;
            // window.localStorage.removeItem("token") ;
            // window.localStorage.getItem("token");
            // document.cookie = res.data.token;
            // document.cookie= res.data.token;
            av('/studs');
          }
          else {
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


    <>
      <form onSubmit={se} className='form' >
        <div>
          <p id="s">EMAIL-ID : <input type="text" name="email_id" placeholder="enter your email id" onChange={ssid} /></p>
          <p className="s">PASSWORD : <input type="password" name="password" placeholder="enter your password" onChange={ssed} /></p>
          <button className='hover_button'>submit</button>
          <p>Not A User :  <Link to="/si" style={{ "color": "red" }} >PLEASE SIGN-UP</Link>  </p>
        </div>
      </form>
    </>
  )
}

