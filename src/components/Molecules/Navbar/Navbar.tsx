import { Aside } from "../Aside/Aside";
import './_Navbar.scss'
import { useTextStyles } from "../../../hooks/useTextStyles";
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