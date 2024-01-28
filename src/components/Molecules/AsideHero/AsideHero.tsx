import { useState, useEffect } from 'react';
import './_AsideHero.scss';
import { useTextStyles } from '../../../hooks/useTextStyles';

export const AsideHero = () => {
    const textStyles = useTextStyles();
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
            <p className={`${textStyles.link}`}>Paris,FR {currentTime}</p>
        </div>
    );
};