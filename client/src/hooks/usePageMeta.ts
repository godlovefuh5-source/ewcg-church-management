import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageMeta = (title: string, description: string) => {
    const { pathname } = useLocation();

    useEffect(() => {
        document.title = title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', description);
        
        // Optionally, you can add Open Graph tags or other meta tags here
        // Example:
        // document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
        // document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
        
        // Clean up function to reset title and description on unmount
        return () => {
            document.title = 'Default Title'; // Set to your default title
            document.querySelector('meta[name="description"]')?.setAttribute('content', 'Default description'); // Set to your default description
        };
    }, [title, description, pathname]);
};

export default usePageMeta;