import './_Error.scss'
import { useTextStyles } from '../../hooks/useTextStyles';
import { Button } from '../../components/Atoms/Button/Button';

export const Error = () => {

    const textStyles = useTextStyles();

    return (
        <div className='container__error'>
            <p className={`${textStyles.title}`}>Error 404</p>
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