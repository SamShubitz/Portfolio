import { useRef, useEffect, useState } from 'react'

const useObserver = (): [any, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        },{root: null, threshold: .3, rootMargin: "60px"})
        
        if (ref.current) {
        observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
            observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return [ref, isVisible];
}

export default useObserver;