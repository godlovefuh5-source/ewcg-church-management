import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-deep-navy p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link to="/">EWCG</Link>
                </div>
                <div className="flex space-x-4">
                    <Link to="/" className="text-white hover:text-gold">Home</Link>
                    <Link to="/about" className="text-white hover:text-gold">About Us</Link>
                    <Link to="/services" className="text-white hover:text-gold">Services</Link>
                    <Link to="/sermons" className="text-white hover:text-gold">Sermons</Link>
                    <Link to="/events" className="text-white hover:text-gold">Events</Link>
                    <Link to="/ministries" className="text-white hover:text-gold">Ministries</Link>
                    <Link to="/give" className="text-white hover:text-gold">Give</Link>
                    <Link to="/contact" className="text-white hover:text-gold">Contact</Link>
                </div>
                <div>
                    <Link to="/live" className="bg-gold text-deep-navy px-4 py-2 rounded hover:bg-bright-gold">Live Stream</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;