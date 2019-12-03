import React, { useState, useEffect} from 'react';
import './Create.css';

const Create = () => {

 const [title, setTitle] = useState("Create component work");

 useEffect(() => {});

  return (
    <div className='Create'>
      { title }!!
    </div>
   );
}

Create.defaultProps = {

};

export default Create;
