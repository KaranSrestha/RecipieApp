import React, { useState } from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import Model from 'react-modal';

function Header() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [ingredient, setIngredient] = useState('');
    const [steps, setSteps] = useState([]);
    const [step, setStep] = useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        };
        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleAddIngredient = () => {
        if (ingredient.trim() !== '') {
            setIngredients([...ingredients, ingredient]);
            setIngredient('');
        }
    };

    const handleRemoveIngredient = (index) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    const handleAddStep = () => {
        if (step.trim() !== '') {
            setSteps([...steps, step]);
            setStep('');
        }
    };

    const handleRemoveStep = (index) => {
        const newSteps = steps.filter((_, i) => i !== index);
        setSteps(newSteps);
    };

    return (
        <div className="sidebar">
            <div className='logo'>Logo</div>
            <div className="sidebar-links mb-[10px]">
                <div onClick={() => navigate("/home")} className="sidebar-link">
                    <i className="fa-solid fa-house"></i>
                    <div>Home</div>
                </div>
                <div className="sidebar-link">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <div>Search</div>
                </div>
                <div onClick={() => navigate("/explore")} className="sidebar-link">
                    <i className="fa-solid fa-compass"></i>
                    <div>Explore</div>
                </div>
                <div onClick={() => setVisible(true)} className="sidebar-link">
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
            <Model isOpen={visible} style={{
                overlay: {
                    background: "transparent"
                },
                content: {
                    width: "500px",
                    height: "750px",
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: "pink"
                }
            }} ariaHideApp={false}>
                <form className='w-full h-full flex flex-col relative p-[20px]'>
                    <h2 className='underline font-[800] mb-[15px] text-[32px]'>Make a Post</h2>
                    <div>
                        <h3 className='mb-[12px] underline font-[600]'>Title</h3>
                        <input type="text" value={title} placeholder='name of recipie' required className='w-full h-[40px] rounded mb-[20px] pl-[10px]' onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <h3 className='mb-[12px] underline font-[600]'>Description</h3>
                        <input type="text" value={description} placeholder='Describe briefly' required className='w-full h-[40px] rounded mb-[20px] pl-[10px]' onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    <div className='relative'>
                        <h3 className='mb-[12px] underline font-[600]'>Upload Image</h3>
                        <label htmlFor="image" className='bg-purple-600 flex items-center w-[40px] h-[40px] justify-center border border-slate-800 absolute bottom-[10px] right-[10px] text-white rounded-full pointer'>
                            <i className="fa-regular fa-square-plus"></i>
                        </label>
                        <input type="file" id="image" name="image" onChange={handleFileChange} required className="hidden" accept='image/*' />
                        <img src={previewUrl || "/brokenImage.png"} alt="Preview" style={{ width: '100%', border: "2px solid black", height: '300px', objectFit: 'contain', backgroundColor: 'grey' }} />
                    </div>
                    <div className='mb-[20px]'>
                        <h3 className='mt-4 underline text-[18px]'>Ingredients (with amount)</h3>
                        <div className='relative w-full h-[40px]'>
                            <input
                                type="text"
                                name="ingredient"
                                placeholder="Ingredient"
                                required
                                className='w-full h-full rounded pl-[10px]'
                                value={ingredient}
                                onChange={(e) => setIngredient(e.target.value)}
                            />
                            <button type="button" onClick={handleAddIngredient} style={{ fontSize: "22px" }} className='absolute right-0 h-full w-[40px] bg-pink-600 text-white'>
                                <i className='fa-regular fa-plus'></i>
                            </button>
                        </div>
                        <ul className='mt-[10px] w-[50%]'>
                            {ingredients.map((ing, index) => (
                                <li key={index} className="flex justify-between items-center">
                                    <span className="ingredient-text truncate max-w-full">{ing}</span>
                                    <button type="button" onClick={() => handleRemoveIngredient(index)} className="text-red-500 ml-2">
                                        <i className="fa-regular fa-circle-xmark"></i>
                                    </button>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className='mb-[20px]'>
                        <h3 className='mt-4 underline text-[18px]'>Steps</h3>
                        <div className='relative w-full h-[40px]'>
                            <input
                                type="text"
                                name="step"
                                placeholder="Step"
                                required
                                className='w-full h-full rounded pl-[10px]'
                                value={step}
                                onChange={(e) => setStep(e.target.value)}
                            />
                            <button type="button" onClick={handleAddStep} style={{ fontSize: "22px" }} className='absolute right-0 h-full w-[40px] bg-pink-600 text-white'>
                                <i className='fa-regular fa-plus'></i>
                            </button>
                        </div>
                        <ul className='mt-[10px] w-[50%]'>
                            {steps.map((stp, index) => (
                                <li key={index} className="flex justify-between items-center">
                                    <span className="step-text truncate max-w-full">{stp}</span>
                                    <button type="button" onClick={() => handleRemoveStep(index)} className="text-red-500 ml-2">
                                        <i className="fa-regular fa-circle-xmark"></i>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="block text-center bg-pink-800 rounded text-white text-xl py-[10px]">
                        Share
                    </button>
                </form>
                <button onClick={() => setVisible(false)} className='absolute top-[-5px] right-[-1px] py-[4px] px-[10px] hover:bg-red-500'>x</button>
            </Model>
        </div>
    );
}

export default Header;
