import React from 'react';

const Suggestion = () => {
    return (
        <div className="fixed top-0 right-0 w-80 p-4 mt-4 mr-4 bg-white border rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Suggestions</h2>
            <div className="space-y-4">
                {/* Example suggestion items */}
                <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <img src="https://via.placeholder.com/40" alt="Recipe 1" className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="text-sm font-medium">Recipe 1</p>
                        <p className="text-xs text-gray-500">Description of recipe 1</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <img src="https://via.placeholder.com/40" alt="Recipe 2" className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="text-sm font-medium">Recipe 2</p>
                        <p className="text-xs text-gray-500">Description of recipe 2</p>
                    </div>
                </div>
                {/* Add more suggestion items as needed */}
            </div>
        </div>
    );
}

export default Suggestion;
