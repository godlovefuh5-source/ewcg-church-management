import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-deep-navy text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">© {new Date().getFullYear()} Enlighten Word Christian Gathering Ministries (EWCG). All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Facebook</a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">YouTube</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Instagram</a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">TikTok</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;