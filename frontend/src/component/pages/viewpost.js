import React, { useEffect, useState } from 'react';
import Sendpost from './sendpost';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Addcomment from './addcomment';
import Viewcomment from './viewcomment';

const Postdetail = () => {

    const user_id = localStorage.getItem('getuser_id')
    const { post_id } = useParams()
    const [countComment, setCountcomment] = useState(0)
    const [view, setView_id] = useState('')

    useEffect(() => {
        axios
            .get('https://stack-blogs-8.onrender.com/postView/' + post_id)
            .then((resp) => {
                setView_id(resp.data)
            })
            .catch((err) => {
                console.log("error at " + err)
            })

    }, [post_id])


    const deletepost = (id) => {
        fetch('https://stack-blogs-8.onrender.com/crudPostView/' + id, {
            method: "DELETE",

        })
            .then((data) => {
                //  console.log(data)
                window.location.reload()
                window.location.replace('/')
            })

            .catch((err) => console.log("errr at: " + err))
    }


    // count comment

    useEffect(() => {
        axios
            .get('https://stack-blogs-8.onrender.com/CommentListViewcount/' + post_id)
            .then((resp) => {
                setCountcomment(resp.data.comment_count)
                // console.log(resp.data.comment_count)
            })
    }, [post_id])


    return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="col-md-6 my-3">
                        <Sendpost />
                    </div>
                    <div className="col-md-5 mx-5">
                        <div className="row">

                            <div class="card mx-3 my-3 " style={{ width: "28rem;" }}>

                                <img src={view.image} style={{ height: '250px', width: '400px' }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    {
                                        view.video && <><Link to={view.video}><i className='fa fa-play' ></i><span className='mx-2' ></span>Video</Link>
                                            <p class="card-text">Click above icon to play video</p></>
                                    }
                                    <Link to='/home/' class="btn btn-secondary">Back</Link>

                                    {
                                        view.author == user_id && <> <span className='mx-3' > <Link to={'/editpost/' + view.id} className='btn btn-success' > <i className='fa fa-edit' ></i> </Link>
                                        </span>   <span className='mx-1'><button onClick={() => deletepost(view.id)} className='btn btn-danger' ><i className='fa fa-trash' ></i></button></span></>
                                    }
                                    <div className="comment my-3">
                                        <div class="accordion accordion-flush" id="accordionFlushExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                        <span className='btn btn-info mx-3' >Comments:[{countComment}]</span>
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body">
                                                        <div className="col-md-10 mx-5">
                                                            <div
                                                                data-bs-spy="scroll"
                                                                data-bs-target="#list-example"
                                                                data-bs-smooth-scroll="true"
                                                                className="scrollspy-example"
                                                                style={{ height: '80px', overflowY: 'auto' }}
                                                                tabindex="0"
                                                            >


                                                                <Viewcomment postId={post_id} />


                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Addcomment postId={post_id} />

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Postdetail;
