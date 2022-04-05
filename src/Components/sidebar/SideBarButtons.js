import React from 'react'
import './Sidebar.css'

function SideBarButtons(props) {
  return (
    <>
    <div className='sidebar-button-container'>
      <div className='sidebar-button'>
          <img src={props.image} alt={props.alt} />
          <p className='title'>{props.title}</p>
      </div>
    </div>
    </>
  )
}

export default SideBarButtons