import React from 'react';
import { Link } from 'react-router-dom';
import brand from '../../../assets/image/eventnow.jpg';

function Navbar() {
  return (
    <React.Fragment>
        <nav className='navbar navbar-dark bg-light navbar-expand-sm'>

            <div className='container'>
                <Link to='/' className='navbar-brand'>
                    <img src={brand} alt=""/>
                </Link>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Navbar;