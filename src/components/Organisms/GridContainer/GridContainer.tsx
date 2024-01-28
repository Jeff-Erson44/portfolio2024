import './_GridContainer.scss';
import * as React from 'react';

type GridContainerProps = {
    children: React.ReactNode;
};

export const GridContainer = ({ children }: GridContainerProps) => {
    return (
        <div className='grid-container'>
            {children}
        </div>
    );
};