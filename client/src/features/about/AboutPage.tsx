import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-deep-navy mb-4">About Us</h1>
            <p className="text-lg text-gray-700 mb-4">
                Welcome to Enlighten Word Christian Gathering Ministries (EWCG). Our mission is to spread the love of God and make disciples through worship, teaching, and community service.
            </p>
            <h2 className="text-2xl font-semibold text-deep-navy mb-2">Our History</h2>
            <p className="text-gray-700 mb-4">
                EWCG was founded in [Year] with a vision to create a welcoming community for believers and seekers alike. Over the years, we have grown into a vibrant church family dedicated to serving our local and global communities.
            </p>
            <h2 className="text-2xl font-semibold text-deep-navy mb-2">Our Vision</h2>
            <p className="text-gray-700 mb-4">
                Our vision is to be a beacon of hope and love in our community, guiding individuals towards a deeper relationship with God.
            </p>
            <h2 className="text-2xl font-semibold text-deep-navy mb-2">Our Mission</h2>
            <p className="text-gray-700 mb-4">
                We are committed to loving God, loving people, and making disciples through various ministries and outreach programs.
            </p>
            <h2 className="text-2xl font-semibold text-deep-navy mb-2">Core Values</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Faith</li>
                <li>Community</li>
                <li>Service</li>
                <li>Integrity</li>
                <li>Growth</li>
            </ul>
            <h2 className="text-2xl font-semibold text-deep-navy mb-2">Our Beliefs</h2>
            <p className="text-gray-700 mb-4">
                We believe in the Holy Trinity, the authority of Scripture, and the importance of personal faith in Jesus Christ.
            </p>
            <h2 className="text-2xl font-semibold text-deep-navy mb-2">Leadership</h2>
            <p className="text-gray-700 mb-4">
                Our church is led by a dedicated team of pastors and leaders who are passionate about serving God and our community.
            </p>
        </div>
    );
};

export default AboutPage;