import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Scroll = () => {

    const[postdata, setPostdata]=useState([])
    useEffect(()=>{
        axios
        .get('http://127.0.0.1:8000/post/')
        .then((resp)=>{
            setPostdata(resp.data)
        })

        .catch((err)=> console.log("errr at: "+err))
    },[])


    return (
        <div>
            <div className="container">
                 <div className="row mx-5">
                                            <div className="col-md-10 mx-5">
                                                <div
                                                    data-bs-spy="scroll"
                                                    data-bs-target="#list-example"
                                                    data-bs-smooth-scroll="true"
                                                    className="scrollspy-example"
                                                    style={{ height: '300px', overflowY: 'auto' }}
                                                    tabindex="0"
                                                >
                                                    <h4 id="list-item-1">{postdata.id}</h4>
                                                  {postdata.map((val)=>{
                                                    return (
                                                        <div class="card mt-3" style={{ width: "18rem;" }}>
                                                        <img src={val.image}  style={{width:"400px", height:"200px", paddingLeft:"140px"}} class="card-img-top mx-4" alt="..." />
                                                        <div class="card-body">
                                                            <h5 class="card-title">{val.title}</h5>
                                                            <p class="card-text">{val.description}</p>
                                                           <Link to={'post/'+val.id} class="btn btn-primary"> View</Link>
                                                        </div>
                                                    </div>
                                                    )
                                                  })
                                                  }
                                                   
                                                </div>
                                            </div>
                                        </div>
                
            </div>
        </div>
    );
}

export default Scroll;
