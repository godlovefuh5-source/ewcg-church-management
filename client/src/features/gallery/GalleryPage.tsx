import React, { useEffect, useState } from 'react';
import { fetchGalleryImages } from '../../services/gallery';
import GalleryItem from '../../components/common/Card';

const GalleryPage: React.FC = () => {
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const fetchedImages = await fetchGalleryImages();
                setImages(fetchedImages);
            } catch (err) {
                setError('Failed to load images. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        loadImages();
    }, []);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image) => (
                    <GalleryItem key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;