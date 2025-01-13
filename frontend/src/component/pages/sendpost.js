import axios from 'axios';
import React, { useState } from 'react';

const Sendpost = () => {
    const id_user=localStorage.getItem("getuser_id")


    const[title, setTitle]=useState('')
    const[description, setdescription]=useState('')
    const[image, setimage]=useState('')
    const[video, setvideo]=useState('')

   const postdata=(e)=>{
    e.preventDefault()
     const postForm =new FormData()
        postForm.append('author', id_user)
        postForm.append('title', title)
        postForm.append('description', description)
        postForm.append('image', image)
        postForm.append('video', video)

      
            fetch('https://stack-blogs-8.onrender.com/post//',{
                method:"POST",
                body:postForm
            })
            .then((resp)=> {
                resp.json()
                window.location.reload()
            })

            .catch((err)=> console.log("errr at: "+err))
   }
    return (
        <div>
            <div className="container">
                <div class="card text-center">
                    <div class="card-header bg-success text-white"  >
                        <b><u  >Make posts</u></b>
                    </div>
                    <div class="card-body shadow">
                        <form method='POST' onSubmit={postdata} >
                            <div class="mb-3">
                                <label for="name" class="form-label">title</label>
                                <input type="text"  value={title} onChange={(e)=> setTitle(e.target.value)}  class="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="image" class="form-label">Decription</label>
                                <textarea type="text" value={description} onChange={(e)=> setdescription(e.target.value)} class="form-control" name="decription" id=""></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="video" class="form-label">image</label>
                                <i className='fa fa-video' ></i>
                                <input type="file" onChange={(e)=> setimage(e.target.files[0])} class="form-control" id="video" />
                            </div>
                            <div class="mb-3">
                                <label for="video" class="form-label"><i className='fa fa-video' ></i>  Video</label>
                                <i className='fa fa-video' ></i>
                                <input type="file" onChange={(e)=>setvideo(e.target.files[0])} class="form-control" id="video" />
                            </div>
                            <button type="submit" class="btn btn-primary">Post </button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Sendpost;
