import React from 'react';
import spinner from '../../../assets/image/spinner.jpeg';

function Spinner() {
  return (
   <React.Fragment>
    <img src={spinner} alt="" className='d-block m-auto'/>
   </React.Fragment>
  )
}

export default Spinner