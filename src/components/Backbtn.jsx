import React from 'react'
import { useNavigate } from 'react-router-dom'

const Backbtn = () => {
    const navigate = useNavigate();
  return (
    <nav className='p-3 bg-dark text-light w-100'>
      <h3 style={{'padding-left': '50px'}}>Pokemon</h3>
        <p onClick={()=> navigate('/')} className="btn btn-success m-1 float-end" style={{'position':'relative', 'top':'-43px'}}>
        <i class="fa-solid fa-arrow-right fa-rotate-180" style={{'color': '#ffffff'}}></i> Go back</p>
    </nav>
  )
}

export default Backbtn