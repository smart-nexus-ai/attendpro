import { useState, useEffect, useRef } from 'react';

/**
 * Hook to track if an element is in visual range (viewport).
 * @param threshold Fraction of element visibility (0.0 to 1.0) required to trigger.
 * @param triggerOnce If true, stop observing after first time it becomes visible.
 * @returns [ref, isInView]
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
    threshold: number = 0.1,
    triggerOnce: boolean = true
): [React.RefObject<T>, boolean] {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (triggerOnce) {
                        observer.disconnect();
                    }
                } else if (!triggerOnce) {
                    setIsInView(false);
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            observer.disconnect();
        };
    }, [threshold, triggerOnce]);

    return [ref, isInView];
}

export default useInView;
