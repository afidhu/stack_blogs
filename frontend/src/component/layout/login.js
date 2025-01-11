import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const id=localStorage.setItem('user_id', 'true')
console.log(id)
const Login = () => {


   const[user, setUser] =useState([])
   const[email, setemail] =useState('')
   const[password, setpassword] =useState('')



   const postdata=(e)=>{
    e.preventDefault()
    const formData=new FormData()
    formData.append('email', email)
    formData.append('password',password )

    fetch("http://127.0.0.1:8000/login/",{
        method:"POST",
        body:formData,
    })
    .then((resp)=>resp.json())
    .then((data)=>{
         if ( data.bool ===true){
                        
            localStorage.setItem('getuser_id', data.user_id)
            localStorage.setItem('getuser_name', data.name)
            window.location.replace('/home/')
            }

            else{
                console.log("wrong psw or email")
            }
    })
    .catch((err)=>{
        console.log("there are err at: "+err)
    })
   }

    return (
        <div>
            <div className="container">
               <div className="col-md-6 mt-5 m-auto">
                <div className="card mt-5">
                <form method='POST' onSubmit={postdata} >
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
                    </div>
                   
                    <button type="submit" class="btn btn-primary">Login</button>
                    <small  className='mx-2 mt-2 ' >I hav'nt an account <Link to='/register/' >Register</Link> </small>
                     <small  className='mx-2 mt-2 ' ><Link className='text-danger'  to='/' >Back </Link> </small>
                </form>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Login;
