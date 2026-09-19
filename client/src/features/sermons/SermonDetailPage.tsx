import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSermonById } from '../../services/sermons';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';

const SermonDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [sermon, setSermon] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSermon = async () => {
            try {
                const data = await getSermonById(id);
                setSermon(data);
            } catch (err) {
                setError('Failed to fetch sermon details.');
            } finally {
                setLoading(false);
            }
        };

        fetchSermon();
    }, [id]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{sermon.title}</h1>
            <p className="text-gray-700 mb-2">By: {sermon.speaker}</p>
            <p className="text-gray-500 mb-4">{new Date(sermon.date).toLocaleDateString()}</p>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Description</h2>
                <p>{sermon.description}</p>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Bible Reference</h2>
                <p>{sermon.bibleReference}</p>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Media</h2>
                {sermon.videoUrl && (
                    <div className="mb-2">
                        <h3 className="font-medium">Video:</h3>
                        <iframe
                            width="100%"
                            height="315"
                            src={sermon.videoUrl}
                            title={sermon.title}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
                {sermon.audioUrl && (
                    <div className="mb-2">
                        <h3 className="font-medium">Audio:</h3>
                        <audio controls>
                            <source src={sermon.audioUrl} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                )}
                {sermon.pdfUrl && (
                    <div className="mb-2">
                        <h3 className="font-medium">Download Notes:</h3>
                        <a href={sermon.pdfUrl} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                            Download PDF
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SermonDetailPage;