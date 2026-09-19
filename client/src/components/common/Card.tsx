import React from 'react';

interface CardProps {
    title: string;
    description: string;
    imageUrl?: string;
    ctaText?: string;
    onCtaClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, ctaText, onCtaClick }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />}
            <div className="p-4">
                <h2 className="text-xl font-semibold text-deep-navy">{title}</h2>
                <p className="text-gray-700 mt-2">{description}</p>
                {ctaText && onCtaClick && (
                    <button
                        onClick={onCtaClick}
                        className="mt-4 bg-gold text-white py-2 px-4 rounded hover:bg-bright-gold transition"
                    >
                        {ctaText}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;