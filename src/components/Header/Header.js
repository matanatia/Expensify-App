import React, { useState, useEffect} from 'react';
import './Header.css';

const Header = ({title}) => {

 const [error, setError] = useState(false);

 useEffect(() => {});

  return (
    <header className='Header'>
      <h1>{ title }</h1>
    </header>
   );
}

Header.defaultProps = {

};

export default Header;
