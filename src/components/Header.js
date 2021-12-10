import React from 'react';

const Header = ()=>{
    return(<nav className="navbar navbar-dark bg-primary">
        <a href={'https://www.smurf.com/en/smurfs-history'} className="navbar-brand" target='_blank' rel="noopener noreferrer" onClick={() => {console.log('You found my easter egg!')}}>Smurf Village Database</a>
    </nav>);
}

export default Header;