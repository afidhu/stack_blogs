import axios from 'axios';
import React, { useState } from 'react';

const Addcomment = (props) => {

        const postID=props.postId
       
    const author=localStorage.getItem('getuser_id')
const[comment, setComment] =useState('')

const postcomment=(e)=>{
    e.preventDefault()
    const formData=new FormData()
        formData.append('author',author)
        formData.append('post',postID)
        formData.append('comment',comment)

        axios
        .post("http://127.0.0.1:8000/commentlistview/", formData)
        .then((resp)=>{
            setComment('')
            window.location.reload()
        })
        .catch((err)=>{
            console.log("please there is error at : "+err)
        })
}

    return (
        <div>
            <div className="container">

            </div>
            <form  onSubmit={postcomment} >
                <div class="mb-3">
                    <textarea name="text"  value={comment}  onChange={(e)=>setComment(e.target.value)} class="form-control" id=""></textarea>
                </div>
                <button type="submit" class="btn btn-primary">  <i className='fa fa-plus-circle' ></i> Comment</button>
            </form>
        </div>
    );
}

export default Addcomment;
