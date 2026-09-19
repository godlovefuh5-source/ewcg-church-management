import React, { useEffect, useState } from 'react';
import { fetchAnnouncements, createAnnouncement, deleteAnnouncement } from '../../../services/api';
import { Announcement } from '../../../types';
import AnnouncementCard from '../../../components/common/Card';
import { Button } from '../../../components/common/Button';

const AnnouncementsModule: React.FC = () => {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [newAnnouncement, setNewAnnouncement] = useState<string>('');

    useEffect(() => {
        const loadAnnouncements = async () => {
            const data = await fetchAnnouncements();
            setAnnouncements(data);
        };

        loadAnnouncements();
    }, []);

    const handleCreateAnnouncement = async () => {
        if (newAnnouncement.trim()) {
            await createAnnouncement({ content: newAnnouncement });
            setNewAnnouncement('');
            const data = await fetchAnnouncements();
            setAnnouncements(data);
        }
    };

    const handleDeleteAnnouncement = async (id: string) => {
        await deleteAnnouncement(id);
        const data = await fetchAnnouncements();
        setAnnouncements(data);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Announcements</h2>
            <div className="mb-4">
                <textarea
                    value={newAnnouncement}
                    onChange={(e) => setNewAnnouncement(e.target.value)}
                    placeholder="Add a new announcement"
                    className="border p-2 w-full"
                />
                <Button onClick={handleCreateAnnouncement} className="mt-2">Create Announcement</Button>
            </div>
            <div>
                {announcements.map((announcement) => (
                    <AnnouncementCard key={announcement.id} announcement={announcement} onDelete={handleDeleteAnnouncement} />
                ))}
            </div>
        </div>
    );
};

export default AnnouncementsModule;