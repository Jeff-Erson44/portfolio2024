import './_AboutInfo.scss';
import { aboutData } from '../../../data/about.data';
import { useTextStyles } from '../../../hooks/useTextStyles';

export const AboutInfo = () => {
    const textStyles = useTextStyles();

    return (
        <section className='container__about'>
            {aboutData.map((aboutDatas) => (
                <div key={aboutDatas.id} className='container__aboutInfo'>
                    <h2 className={`${textStyles.hightBody} `}>{aboutDatas.title}</h2>
                    <p className={`${textStyles.body} `}>{aboutDatas.text}</p>
                    {aboutDatas.hobby ? (
                        <div>
                        {aboutDatas.hobby.map((hobby) => (
                            <p key={hobby.id} className={`${textStyles.body} `}>
                                {hobby.text}
                            </p>
                        ))}
                        </div>
                    ):(
                        ''
                    )}
                </div>
            ))}
        </section>
    );
};