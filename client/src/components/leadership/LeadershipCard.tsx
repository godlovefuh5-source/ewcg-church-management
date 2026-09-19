import React from 'react';

interface LeadershipCardProps {
    name: string;
    position: string;
    biography: string;
    photoUrl: string;
    socialLinks?: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
        linkedin?: string;
    };
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({ name, position, biography, photoUrl, socialLinks }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={photoUrl} alt={`${name}'s photo`} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-deep-navy">{name}</h3>
                <p className="text-md text-gray-600">{position}</p>
                <p className="mt-2 text-gray-700">{biography}</p>
                <div className="mt-4">
                    {socialLinks && (
                        <div className="flex space-x-4">
                            {socialLinks.facebook && (
                                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-deep-navy">
                                    Facebook
                                </a>
                            )}
                            {socialLinks.twitter && (
                                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-deep-navy">
                                    Twitter
                                </a>
                            )}
                            {socialLinks.instagram && (
                                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-deep-navy">
                                    Instagram
                                </a>
                            )}
                            {socialLinks.linkedin && (
                                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-deep-navy">
                                    LinkedIn
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeadershipCard;