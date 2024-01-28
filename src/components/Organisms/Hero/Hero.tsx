import { Button } from "../../Atoms/Button/Button";
import "./_Hero.scss";

export const Hero = () => {
    return (
        <section className="container__hero">
            <h2>I am developer<br/> of  digital solution</h2>
            <h1>Jefferson.K</h1>
            <h3>My name is Jefferson, 24 years old developer based in Paris. With over 3 years of experience as a freelancer, I am passionate about web development and innovative technologies such as blockchain and cryptocurrencies.</h3>
            <Button
                variant="primary"
                link="/projectList"
                type="button"
            >View works
            </Button>
        </section>
    );
};