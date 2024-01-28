import './_Error.scss'
import { Button } from '../../components/Atoms/Button/Button';

export const Error = () => {

    return (
        <div className='container__error'>
            <p>Error 404</p>
            <Button
                variant='primary'
                type='button'
                link='/'
            >
                Return to Home
            </Button>
        </div>
    );
};