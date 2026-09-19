import React from 'react';

interface EventCardProps {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    imageUrl: string;
    onClick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, date, time, location, imageUrl, onClick }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-deep-navy">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <div className="mt-2">
                    <span className="text-sm text-gray-500">{date}</span>
                    <span className="text-sm text-gray-500 mx-2">|</span>
                    <span className="text-sm text-gray-500">{time}</span>
                </div>
                <div className="mt-1">
                    <span className="text-sm text-gray-500">{location}</span>
                </div>
            </div>
        </div>
    );
};

export default EventCard;