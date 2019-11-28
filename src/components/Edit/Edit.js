import React, { useState, useEffect} from 'react';
import './Edit.css';

const Edit = () => {

 const [title, setTitle] = useState("Edit component work");

 useEffect(() => {});

  return (
    <div className='Edit'>
      { title }!!
    </div>
   );
}

Edit.defaultProps = {

};

export default Edit;
