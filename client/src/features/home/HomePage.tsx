import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/layout/Hero';
import ServiceInfoBar from './ServiceInfoBar';
import QuickActionCards from './QuickActionCards';
import UpcomingEvents from './UpcomingEvents';
import LatestSermon from './LatestSermon';
import Ministries from './Ministries';
import ChurchIntroduction from './ChurchIntroduction';
import CallToAction from './CallToAction';

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <ServiceInfoBar />
            <QuickActionCards />
            <UpcomingEvents />
            <LatestSermon />
            <Ministries />
            <ChurchIntroduction />
            <CallToAction />
        </div>
    );
};

export default HomePage;