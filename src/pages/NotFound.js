import React from 'react';
import { Link } from 'react-router-dom';
import  '../components/styles/NotFound.css';
function NotFound() {
  return (
<div className="caja"> 
<h2>Oops! Page not Found.</h2>
<h1>404</h1>
<Link to="/">Go Back Home</Link>
</div>

  )
}

export default NotFound;