import { Aside } from "../Aside/Aside";
import './_Navbar.scss'
export const Navbar = () => {

    return (
        <nav className="navbar">
            <p>
                <a href="/">Jefferson.K©2024</a>
            </p>
            <Aside />
        </nav>
    );
};