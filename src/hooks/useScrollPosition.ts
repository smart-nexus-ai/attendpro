import { useState, useEffect } from 'react';

/**
 * Hook that returns the current window scroll position (Y-axis).
 * Optimized with passive event listener.
 */
export function useScrollPosition() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // Current window.scrollY value
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Add scroll listener with passive: true for performance
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Initial call to set position correctly on mount
        handleScroll();

        // Cleanup on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
}

export default useScrollPosition;
