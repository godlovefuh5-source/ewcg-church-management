import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gold"></div>
        </div>
    );
};

export default LoadingSpinner;