import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Scroll from './scroll';
import { useParams } from 'react-router-dom';

const Sendpost = () => {

    const { post_id } = useParams()

    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')
    const [image, setimage] = useState('')
    const [video, setvideo] = useState('')


    useEffect(() => {
        axios
            .get('https://stack-blogs-8.onrender.com/postView/' + post_id)
            .then((resp) => {
                setTitle(resp.data.title)
                setdescription(resp.data.description)
                setimage(resp.data.image)
                setvideo(resp.data.video)
            })
    }, [post_id])



    const id_user = localStorage.getItem("getuser_id")



    const postdata = (e) => {
        e.preventDefault()
        const postForm = new FormData()
        postForm.append('author', id_user)
        postForm.append('title', title)
        postForm.append('description', description)
        postForm.append('image', image)
        postForm.append('video', video)


        fetch('https://stack-blogs-8.onrender.com/crudPostView/' + post_id, {
            method: "PUT",
            body: postForm
        })
            .then((resp) => resp.json())
            .then((data) => {

                window.location.replace('/')
            })

            .catch((err) => console.log("errr at: " + err))
    }
    return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="col-md-5 my-3">
                        <div class="card text-center">
                            <div class="card-header bg-success text-white"  >
                                <b><u  >Edit posts</u></b>
                            </div>
                            <div class="card-body shadow">
                                <form method='POST' onSubmit={postdata} >
                                    <div class="mb-3">
                                        <label for="name" class="form-label">title</label>
                                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} class="form-control" id="name" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="image" class="form-label">Decription</label>
                                        <textarea type="text" value={description} onChange={(e) => setdescription(e.target.value)} class="form-control" name="decription" id=""></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="video" class="form-label">image</label>
                                        <i className='fa fa-video' ></i>
                                        <input type="file" onChange={(e) => setimage(e.target.files[0])} class="form-control" id="video" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="video" class="form-label"><i className='fa fa-video' ></i>  Video</label>
                                        <i className='fa fa-video' ></i>
                                        <input type="file" onChange={(e) => setvideo(e.target.files[0])} class="form-control" id="video" />
                                    </div>
                                    <button type="submit" class="btn btn-primary">Update </button>
                                </form>

                            </div>

                        </div>

                    </div>
                    <div className="col-md-7 my-5">
                        <Scroll />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sendpost;
