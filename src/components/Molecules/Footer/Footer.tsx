import { socials } from "../../../data/linkSocial.data";
import { useTextStyles } from "../../../hooks/useTextStyles";
import './_Footer.scss'


export const Footer = () => {

    const textStyles = useTextStyles();

    return (
        <footer className={`${textStyles.link} footer`}>
            <ul>
                <li>
                    <a href="mailto:jeffersonk.pro@gmail.com">Mail me</a>
                    <img
                        src="/images/icon/arrow.svg"
                    />
                </li>
                {socials.map((social, index) => (
                    <li key={index}>
                        <a href={social.url} target="_blank" rel="noreferrer">
                            {social.name}
                        </a>
                        <img
                            src="/images/icon/arrow.svg"
                        />
                    </li>
                ))}
            </ul>
            <ul>
                <li className={`${textStyles.link}`}>Jefferson.K©2024</li>
            </ul>
        </footer>
    );
};