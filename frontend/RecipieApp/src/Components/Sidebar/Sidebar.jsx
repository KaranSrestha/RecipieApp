import React, { useState } from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import Model from 'react-modal'

function Header() {
    const navigate=useNavigate();
    const [visible,setVisible]=useState(false);
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
                <div
                 className="sidebar-link">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <div>Search</div>
                </div>
                <div 
                onClick={()=>navigate("/explore")}
                className="sidebar-link">
                    <i className="fa-solid fa-compass"></i>
                    <div>Explore</div>
                </div>
                <div 
                onClick={()=>setVisible(true)}
                className="sidebar-link">
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
            <Model isOpen={visible} onRequestClose={()=>setVisible(false)} style={{
                overlay:{
                    background:"transparent"
                },
                content:{
                        width: "500px",
                        height: "500px",
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        
                },
            }}>
                <form action="">
                <div>
                        <label htmlFor="image">Upload Image:</label>
                        <input type="file" id="image" name="image"/>
                    </div>
                    <div>
                    <h3>Ingredients</h3>
                    <div>
                         <input
                            type="text"
                            name="name"
                            placeholder="Ingredient"
                        />
                        <button type="button">Add Ingredient</button>
                        </div>
                    </div>
                </form>
                <button onClick={() => setVisible(false)}>Close</button>
            </Model>
        </div>
    );
}

export default Header;
