import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate=useNavigate();
    return (
        <div className="sidebar">
            <div className='logo'>Logo</div>
            <div className="sidebar-links mb-[10px]">
                <div 
                onClick={()=>navigate("/home")}
                className="sidebar-link">
                    <i className="fa-solid fa-house"></i>
                    <div>Home</div>
                </div>
                <div className="sidebar-link">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <div>Search</div>
                </div>
                <div 
                onClick={()=>navigate("/explore")}
                className="sidebar-link">
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
                <div className="sidebar-link profile-link">
                    <i className="fa-solid fa-user"></i>
                    <div>Profile</div>
                </div>
            </div>
            <div className="sidebar-link more-link">
                <i className="fa-solid fa-bars"></i>
                <div>More</div>
            </div>
        </div>
    );
}

export default Header;
