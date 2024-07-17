import React from 'react'
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>

      <div className="sidebar">
      <div className='logo'>Logo</div>
        <div className="sidebar-link">
        <i className="fa-solid fa-house"></i>
          <div>Home</div>
        </div>
        <div className="sidebar-link">
        <i className="fa-solid fa-magnifying-glass"></i>
          <div>Search</div>
        </div>
        <div className="sidebar-link">
          <i className="fa-solid fa-compass"></i>
          <div>Explore</div>
        </div>
        <div className="sidebar-link">
          <i className="fa-regular fa-square-plus"></i>
          <div>Create</div>
        </div>
        <div className="sidebar-link">
          <i className="fa-solid fa-floppy-disk"></i>
          <div>Saved</div>
        </div>
        <div className="sidebar-link">
        <i className="fa-solid fa-floppy-disk"></i>
        <div>Profile</div>
        </div>
        <div className="sidebar-link">
        <i class="fa-solid fa-bars"></i>
        <div>More</div>
        </div>
      </div>
    </>
  )
}

export default Header