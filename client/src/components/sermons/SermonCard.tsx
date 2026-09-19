import React from 'react';

interface SermonCardProps {
    title: string;
    speaker: string;
    date: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    audioUrl: string;
    pdfUrl: string;
}

const SermonCard: React.FC<SermonCardProps> = ({
    title,
    speaker,
    date,
    description,
    thumbnailUrl,
    videoUrl,
    audioUrl,
    pdfUrl,
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={thumbnailUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-600">By {speaker} on {date}</p>
                <p className="mt-2 text-gray-700">{description}</p>
                <div className="mt-4 flex space-x-2">
                    {videoUrl && (
                        <a href={videoUrl} className="bg-deep-navy text-white py-2 px-4 rounded hover:bg-gold">
                            Watch Video
                        </a>
                    )}
                    {audioUrl && (
                        <a href={audioUrl} className="bg-deep-navy text-white py-2 px-4 rounded hover:bg-gold">
                            Listen Audio
                        </a>
                    )}
                    {pdfUrl && (
                        <a href={pdfUrl} className="bg-deep-navy text-white py-2 px-4 rounded hover:bg-gold">
                            Download Notes
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SermonCard;