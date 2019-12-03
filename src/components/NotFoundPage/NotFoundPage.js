import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './NotFoundPage.css';

const NotFoundPage = () => {

 const [title, setTitle] = useState("404!");

 useEffect(() => {});

  return (
    <div className='NotFoundPage'>
      { title }!! - <Link to="/">Go Home</Link>
    </div>
   );
}

NotFoundPage.defaultProps = {

};

export default NotFoundPage;
