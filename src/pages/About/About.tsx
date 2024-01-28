import './_About.scss'
import { AboutInfo } from '../../components/Molecules/AboutInfo/AboutInfo';
import { useTextStyles } from '../../hooks/useTextStyles';


export const About = () => {

    const textStyles = useTextStyles();

    return (
        <>
            <h1 className='title__about'>My name is Jefferson, 24 years old developer based in Paris. With over 3 years of experience as a freelancer, I am passionate about web development and innovative technologies such as blockchain and cryptocurrencies.</h1>
            <AboutInfo />
            <div className='about__interact'>
                <h2 className={`${textStyles.hightBody} `}>Open to Work 🟢</h2>
                <ul>
                    <li>
                        <a href="mailto:jeffersonk.pro@gmail.com">Mail me</a>
                        <img
                            src="/images/icon/arrow.svg"
                        />
                    </li>
                </ul>
            </div>
        </>
    );
};