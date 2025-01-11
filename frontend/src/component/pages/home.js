import React, { useEffect, useState } from 'react';
import Sendpost from './sendpost';
import { Link } from 'react-router-dom';
import Scroll from './scroll';
import axios  from 'axios'
import Footer from '../layout/footer';

const Home = () => {



    return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="col-md-5 my-3">
                        <Sendpost />
                    </div>
                    <div className="col-md-7 my-5">
                       <Scroll/>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>

      
  

    );
}

export default Home;
