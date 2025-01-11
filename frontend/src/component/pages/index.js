import React from 'react';
import { Link, Links } from 'react-router-dom';

const Index = () => {
    return (
        <div>
            <div className="container">
                <div className="col-md-8 m-auto mt-5">
                    <div class="card">
                        <div class="card-header text-info bg-success">
                         <b > <u style={{fontSize:"40px"}}> Welcome to Blogs Platform</u></b>
                        </div>
                        <div class="card-body mt-5">
                            <blockquote class="blockquote mb-0">
                              <h4 >Have an account <span ><i  className='fa fa-lock mx-1 ' ></i> <Link to='login' style={{textDecoration:"none"}} ><b className='text-success' > Login</b></Link></span></h4>
                              <h4>Not Have an account <span><i  className='fa fa-unlock mx-1 ' ></i><Link to='register'  style={{textDecoration:"none"}}  ><b className='text-warning' > Sign up</b></Link> </span></h4>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
