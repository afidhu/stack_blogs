import React from 'react';
import { Link } from 'react-router-dom';

const name=localStorage.getItem('getuser_name')
console.log(name)

const logoutnow=()=>{
    localStorage.removeItem('getuser_id')
    localStorage.removeItem('getuser_name')
    window.location.replace('/')
}

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-secondary" href="#">SNP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            {
                                name && <Link to='/home/' className="nav-link active" aria-current="page" href="#">Home</Link>
                            }
                                
                            </li>
                          
                        </ul>
                    </div>
                    <div className="acount mx-5">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              User {name &&  <span>{name}</span> }
                            </a>
                            <ul class="dropdown-menu">
                            {
                                name && <>
                                <li><button className="dropdown-item" onClick={logoutnow} >Logout</button></li>
                                </>
                            }
                              
                               
                            </ul>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
