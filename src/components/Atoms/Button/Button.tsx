import { Link } from 'react-router-dom';
import './_Button.scss'

type ButtonProps ={
    children: string;
    variant: 'primary' | 'secondary';
    type: 'button' | 'submit' | 'reset';
    link?: string;
    href?: string;
}

export const Button:React.FC<ButtonProps> = ({ children, variant='primary', type='button', link, href}) => {
    const buttonElement = (
        <button
            className={`btn ${variant}`}
            type={type}
        >
            {children}
        </button>
    );
    return link ? (
        <Link to={link} tabIndex={-1}>
            {buttonElement}
        </Link>
    ) : (
        <a href={href} tabIndex={-1}>
            {buttonElement}
        </a>
    );
};