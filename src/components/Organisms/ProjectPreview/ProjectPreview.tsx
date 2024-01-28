import { useContentful } from '../../../hooks/useContentful';
import { fieldsProject } from '../../../type/fieldsProject.type';
import './_ProjectPreview.scss'
import { useState, useEffect } from 'react';

export const ProjectPreview = () => {

    const [project, setProject] = useState<fieldsProject[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const items = await useContentful();
                const dataFetch = items.map((item: any) => item.fields);
                setProject(dataFetch);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    return (
        <>
            {project.map((project, index: number ) => (
                <div key={index} className='container__projectPreview'>
                    <div className='container__projectPreview--info'>
                        <div className='container__projectPreview--info__highlight'>
                            <p>[{index + 1}]</p>
                            <h2>
                                <a href={`/project/${project.slug}`}>{project.title}</a>
                            </h2>
                        </div>
                        <h3>{project.typeProject}</h3>
                    </div>
                    <div className='container__projectPreview--image'>
                        {project?.thumbnail.map((image: string, index: number) => (
                            <img
                                key={index}
                                src={(image as any)?.fields?.file.url}
                                alt={(image as any)?.fields?.title}
                                width={(image as any)?.fields?.file.details.image.width}
                                height={(image as any)?.fields?.file.details.image.height}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};