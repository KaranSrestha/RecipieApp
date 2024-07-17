import React from 'react'
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <div class="header">
        <div class="left-section">
          <div>Logo</div>
        </div>
        <div class="right-section">
          <div>User Icon</div>
        </div>
      </div>

      <div class="sidebar">
        <div class="sidebar-link">
          <div>Home</div>
        </div>
        <div class="sidebar-link">
          <div>Search</div>
        </div>
        <div class="sidebar-link">
          <div>Explore</div>
        </div>
        <div class="sidebar-link">
          <div>Create</div>
        </div>
        <div class="sidebar-link">
          <div>Saved</div>
        </div>
      </div>
    </>
  )
}

export default Header