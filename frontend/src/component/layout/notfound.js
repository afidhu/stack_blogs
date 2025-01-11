import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <div className="container">
            <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Page not found</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to='/' class="btn btn-primary">Go Back</Link>
  </div>
</div>
            </div>
        </div>
    );
}

export default Notfound;
