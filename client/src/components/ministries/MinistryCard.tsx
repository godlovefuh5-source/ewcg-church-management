import React from 'react';

interface MinistryCardProps {
    name: string;
    description: string;
    imageUrl: string;
    leader: string;
    meetingSchedule: string;
}

const MinistryCard: React.FC<MinistryCardProps> = ({ name, description, imageUrl, leader, meetingSchedule }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={imageUrl} alt={`${name} image`} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-deep-navy">{name}</h3>
                <p className="text-gray-700 mt-2">{description}</p>
                <p className="text-gray-600 mt-2"><strong>Leader:</strong> {leader}</p>
                <p className="text-gray-600"><strong>Meeting Schedule:</strong> {meetingSchedule}</p>
            </div>
        </div>
    );
};

export default MinistryCard;