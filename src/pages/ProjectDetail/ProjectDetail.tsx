/* eslint-disable @typescript-eslint/no-explicit-any */
import './_ProjectDetail.scss';
import { useParams } from 'react-router-dom';
import { useContentful } from '../../hooks/useContentful';
import { useState, useEffect, SetStateAction } from 'react';
import { useTextStyles } from '../../hooks/useTextStyles';
import { Button } from '../../components/Atoms/Button/Button';
import { ProgressBar } from '../../components/Molecules/ProgressBar/ProgressBar'
import { InfoProject } from '../../components/Molecules/InfoProject/InfoProject';
import { fieldsProject } from '../../type/fieldsProject.type';

export const ProjectDetail = () => {

    const { slug } = useParams();
    const textStyles = useTextStyles();
    const [project, setProject] = useState<fieldsProject | null>(null); 
    const [indexImage, setIndexImage] = useState<number>(0);
    const lengthGallery = project?.imageGallery?.length;

    useEffect(() => {
        const fetchData = async () => {
            try {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const items = await useContentful();
                const dataFecth = items.map((item: any) => item.fields);
                const matchedProject = dataFecth.find((p: fieldsProject) => p.slug === slug);
                setProject(matchedProject);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleImageChange((indexImage + 1) % (lengthGallery || 1));
        }, 5000);

        return () => clearInterval(intervalId);
    }, [indexImage, lengthGallery]);

    const handleImageChange = (newIndex: SetStateAction<number>) => {
        setIndexImage(newIndex);

        const Bar = document.querySelectorAll('.itemBar');
        Bar.forEach((item, index) => {
            if (index === newIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    };


    return (
        <section className='container__projectDetail'>
            <div className='container__projectDetail--highlight'>
                <h1>{project?.title}</h1>
                <h2 className={`${textStyles.link}`}>{project?.typeProject}</h2>
                <h3 className={`${textStyles.link}`}>{project?.client} - {project?.year}</h3>
            </div>
            <div className='container__projectDetail--medium'>
                <div className='container__projectDetail--medium__image'>
                    <img 
                        src={`https://${project?.imageGallery?.[indexImage]?.fields?.file?.url}`}
                        alt={project?.imageGallery?.[indexImage]?.fields?.title}
                    />
                    <ProgressBar length={lengthGallery ?? 0} />
                    <div className='container__projectDetail--navigation'>
                        <div className='navigation'>
                            <img
                                onClick={() => handleImageChange((indexImage - 1 + (lengthGallery ?? 0)) % (lengthGallery ?? 0))}
                                src='/images/icon/arrow-left.svg'
                            />
                            <img
                                onClick={() => handleImageChange((indexImage + 1) % (lengthGallery ?? 0))}
                                src='/images/icon/arrow-right.svg'
                            />
                        </div>
                    </div>
                </div>
                <div className='container__projectDetail--medium__info'>
                    <div className='description'>
                        <p className='description'>
                            {project?.description}
                        </p>
                    </div>
                    <div className='info'>
                        <InfoProject />
                        <div className='info__button'>
                            <Button 
                                variant='primary'
                                link='/'
                                type='button'
                            >View Site</Button>
                            <Button 
                                variant='secondary'
                                link='/'
                                type='button'
                            >View Git</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};