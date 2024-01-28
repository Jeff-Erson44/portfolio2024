import { useTextStyles } from "../../../hooks/useTextStyles";
import { Aside } from "../Aside/Aside";
import './_Navbar.scss'

export const Navbar = () => {

    const textStyles = useTextStyles();
    return (
        <nav className="navbar">
            <p className={`${textStyles.link}`}>
                <a href="/">Jefferson.K©2024</a>
            </p>
            <Aside />
        </nav>
    );
};