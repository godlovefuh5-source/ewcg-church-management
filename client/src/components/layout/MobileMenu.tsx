import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`fixed top-0 right-0 w-64 bg-white p-4 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={onClose} className="text-black">Close</button>
                <nav className="mt-4">
                    <ul>
                        <li>
                            <Link to="/" onClick={onClose} className="block py-2 text-black">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={onClose} className="block py-2 text-black">About Us</Link>
                        </li>
                        <li>
                            <Link to="/services" onClick={onClose} className="block py-2 text-black">Services</Link>
                        </li>
                        <li>
                            <Link to="/sermons" onClick={onClose} className="block py-2 text-black">Sermons</Link>
                        </li>
                        <li>
                            <Link to="/events" onClick={onClose} className="block py-2 text-black">Events</Link>
                        </li>
                        <li>
                            <Link to="/ministries" onClick={onClose} className="block py-2 text-black">Ministries</Link>
                        </li>
                        <li>
                            <Link to="/give" onClick={onClose} className="block py-2 text-black">Give</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={onClose} className="block py-2 text-black">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu;