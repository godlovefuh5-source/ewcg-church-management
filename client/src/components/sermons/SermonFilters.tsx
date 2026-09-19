import React from 'react';

const SermonFilters: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <div className="flex items-center mb-2 md:mb-0">
                <label htmlFor="search" className="mr-2 text-lg font-semibold">Search:</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search sermons..."
                    className="border border-gray-300 rounded px-3 py-2"
                />
            </div>
            <div className="flex items-center">
                <label htmlFor="category" className="mr-2 text-lg font-semibold">Category:</label>
                <select id="category" className="border border-gray-300 rounded px-3 py-2">
                    <option value="">All Categories</option>
                    <option value="teaching">Teaching</option>
                    <option value="worship">Worship</option>
                    <option value="evangelism">Evangelism</option>
                </select>
            </div>
        </div>
    );
};

export default SermonFilters;