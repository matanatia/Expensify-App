import React, { useState, useEffect} from 'react';
import './Header.css';

const Header = () => {

 const [title, setTitle] = useState("Header component work");

 useEffect(() => {});

  return (
    <div className='Header'>
      { title }!!
    </div>
   );
}

Header.defaultProps = {

};

export default Header;
