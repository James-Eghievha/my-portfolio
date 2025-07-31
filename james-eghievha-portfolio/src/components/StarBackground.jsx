import {useState} from "react";
import { useEffect } from 'react'; // 4.2k (gzipped: 1.8k)

// id, size, x, y, opacity, animationDuration
// This component generates a starry background with animated stars.
// The stars are randomly positioned and animated to create a dynamic effect.

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars(); // Generate stars when the component mounts
        generateMeteors(); // Generate meteors when the component mounts

        const handleResize = () => {
            generateStars(); // Regenerate stars on window resize
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);

        const newStars = []
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
       setStars(newStars);
    };


     const generateMeteors = () => {
        const numberOfMeteors = 4;

        const newMeteors = []
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 1 + 0,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 100,
                animationDuration: Math.random() * 3 + 1,
            });
        }
       setMeteors(newMeteors);
    };


    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" >
            {stars.map((star) => {
                return (
                <div key={star.id} className= "star animate-pulse-subtle" style={{
                    width: star.size + 'px',
                    height: star.size + 'px',
                    left: star.x + '%',
                    top: star.y + '%',
                    opacity: star.opacity,
                    animationDuration: `${star.animationDuration}s`,
                }}
                />
            );
            })},

             {meteors.map((meteor) => {
                return (
                <div key={meteor.id} className= "meteor animate-meteor" style={{
                    width: meteor.size * 50 + 'px',
                    height: meteor.size  + 'px',
                    left: meteor.x + '%',
                    top: meteor.y + '%',
                    animationDelay: meteor.delay + 's',
                    animationDuration: meteor.animationDuration + 's',
                }}
                />
            );
            })}
        </div>;
};