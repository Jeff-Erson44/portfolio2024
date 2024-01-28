import { asideData } from "../../../data/aside.data";
import "./_Aside.scss";

export const Aside = () => {
    return (
        <div className="container__aside">
            {asideData.map((aside, index) => {
                return (
                    <p key={index}>
                        <a href={aside.url}>{aside.name}</a>
                    </p>
                    );
                }
            )}
        </div>
    );
};