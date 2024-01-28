import { useTextStyles } from "../../../hooks/useTextStyles";
import { asideData } from "../../../data/aside.data";
import "./_Aside.scss";

export const Aside = () => {

    const textStyles = useTextStyles();  
    return (
        <div className="container__aside">
            {asideData.map((aside, index) => {
                return (
                    <p key={index} className={`${textStyles.link}`}>
                        <a href={aside.url}>{aside.name}</a>
                    </p>
                    );
                }
            )}
        </div>
    );
};