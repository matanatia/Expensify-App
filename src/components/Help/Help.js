import React, { useState, useEffect} from 'react';
import './Help.css';

const Help = () => {

 const [title, setTitle] = useState("Help component work");

 useEffect(() => {});

  return (
    <div className='Help'>
      { title }!!
    </div>
   );
}

Help.defaultProps = {

};

export default Help;
