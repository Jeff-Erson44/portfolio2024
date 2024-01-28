import { useState, useEffect } from 'react';
import './_AsideHero.scss';

export const AsideHero = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString(
        [], { hour: '2-digit', minute: '2-digit' }
    ));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString(
                [], { hour: '2-digit', minute: '2-digit' }
            ));
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='asideHero__container'>
            <p>Paris,FR {currentTime}</p>
        </div>
    );
};