import { ItemBar } from '../../Atoms/ItemBar/ItemBar';
import './_ProgressBar.scss';

export const ProgressBar = ({ length }: { length: number }) => {
    const progressBarItems = Array.from({ length}, (_, index) => (
        <ItemBar key={index} />
    ));

    return (
        <div className='container__progressBar'>
            {progressBarItems}
        </div>
    );
};