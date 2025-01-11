import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


   const[user, setUser] =useState([])
   const[name, setname] =useState('')
   const[email, setemail] =useState('')
   const[password, setpassword] =useState('')



   const postdata=(e)=>{
    e.preventDefault()
    const formData=new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('password',password )

    fetch("http://127.0.0.1:8000/register/",{
        method:"POST",
        body:formData,
    })
    .then((resp)=>resp.json())
    .then((data)=>{
         window.location.replace('/login/')
    })
    .catch((err)=>{
        console.log("there are err at: "+err)
    })
   }

    return (
        <div>
            <div className="container">
               <div className="col-md-6 mx-auto mt-5">
                <div className="card mx-auto">
                <form method='POST' onSubmit={postdata} >
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">usernane</label>
                        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
                    </div>
                   
                    <button type="submit" class="btn btn-primary">Register</button>
                    <small  className='mx-2 mt-2 ' >I have an account <Link to='/login/' >Login</Link> </small>
                    <small  className='mx-2 mt-2 ' ><Link  className='text-danger' to='/' >Back</Link> </small>
                </form>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Login;
