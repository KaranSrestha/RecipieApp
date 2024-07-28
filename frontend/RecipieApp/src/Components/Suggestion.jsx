import React from 'react';
import img from '/background.jpg'

const Suggestion = () => {
    return (
        <div className="fixed top-0 right-0 w-80 p-[15px] bg-transparent border-l shadow-lg h-[100vh]">
            <h2 className="text-xl font-semibold mb-4 text-white">Suggested for you..</h2>
            <div className="space-y-4">
                <div className="flex items-center space-x-3 p-2 onMouse rounded-lg cursor-pointer">
                    <img src={img} alt="Recipe 1" className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="text-sm font-medium text-white">Recipe 1</p>
                        <p className="text-xs text-gray-300">Description of recipe 1</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 p-2 onMouse rounded-lg cursor-pointer">
                    <img src={img} alt="Recipe 2" className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="text-sm font-medium text-white">Recipe 2</p>
                        <p className="text-xs text-gray-300">Description of recipe 2</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 p-2 onMouse rounded-lg cursor-pointer">
                    <img src={img} alt="Recipe 2" className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="text-sm font-medium text-white">Recipe 2</p>
                        <p className="text-xs text-gray-300">Description of recipe 2</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 p-2 onMouse rounded-lg cursor-pointer">
                    <img src={img} alt="Recipe 2" className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="text-sm font-medium text-white">Recipe 2</p>
                        <p className="text-xs text-gray-300">Description of recipe 2</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Suggestion;
