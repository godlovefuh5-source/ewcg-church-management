import React, { useEffect, useState } from 'react';
import { fetchGalleryImages, deleteGalleryImage } from '../../../services/gallery';
import { GalleryImage } from '../../../types';
import Modal from '../../../components/common/Modal';
import LoadingSpinner from '../../../components/common/LoadingSpinner';
import ErrorMessage from '../../../components/common/ErrorMessage';

const GalleryModule: React.FC = () => {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const fetchedImages = await fetchGalleryImages();
                setImages(fetchedImages);
            } catch (err) {
                setError('Failed to load images.');
            } finally {
                setLoading(false);
            }
        };

        loadImages();
    }, []);

    const handleDelete = async (imageId: string) => {
        try {
            await deleteGalleryImage(imageId);
            setImages(images.filter(image => image.id !== imageId));
        } catch (err) {
            setError('Failed to delete image.');
        }
    };

    const openModal = (image: GalleryImage) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="gallery-module">
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map(image => (
                    <div key={image.id} className="relative">
                        <img src={image.url} alt={image.description} className="w-full h-auto rounded-lg" onClick={() => openModal(image)} />
                        <button onClick={() => handleDelete(image.id)} className="absolute top-2 right-2 bg-red-500 text-white rounded px-2 py-1">Delete</button>
                    </div>
                ))}
            </div>
            {isModalOpen && selectedImage && (
                <Modal onClose={closeModal}>
                    <img src={selectedImage.url} alt={selectedImage.description} className="w-full h-auto" />
                    <p>{selectedImage.description}</p>
                </Modal>
            )}
        </div>
    );
};

export default GalleryModule;