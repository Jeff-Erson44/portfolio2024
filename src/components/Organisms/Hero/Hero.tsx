import { Button } from "../../Atoms/Button/Button";
import "./_Hero.scss";

export const Hero = () => {
    return (
        <section className="container__hero">
            <h2>I am developer<br/> of  digital solution</h2>
            <h1>Jefferson.K</h1>
            <h3>Portfolio in building.
                please come back in few days.
            </h3>
            <Button
                variant="primary"
                link="/"
                type="button"
            >IN PROGRESS
            </Button>
        </section>
    );
};