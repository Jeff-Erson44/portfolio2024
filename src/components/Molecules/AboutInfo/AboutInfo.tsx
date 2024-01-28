import './_AboutInfo.scss';
import { aboutData } from '../../../data/about.data';

export const AboutInfo = () => {

    return (
        <section className='container__about'>
            {aboutData.map((aboutDatas) => (
                <div key={aboutDatas.id} className='container__aboutInfo'>
                    <h2>{aboutDatas.title}</h2>
                    <p>{aboutDatas.text}</p>
                    {aboutDatas.hobby ? (
                        <div>
                        {aboutDatas.hobby.map((hobby) => (
                            <p key={hobby.id}>
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