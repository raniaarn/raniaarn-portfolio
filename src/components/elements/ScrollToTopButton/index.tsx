import { useEffect, useState } from 'react';
import { BsArrowUpCircleFill } from "react-icons/bs";

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <button onClick={scrollToTop} className='fixed bottom-8 right-8 bg-white rounded-full shadow-lg'>
                <BsArrowUpCircleFill className='text-purple-500 text-4xl' />
            </button>
        )
    );
};