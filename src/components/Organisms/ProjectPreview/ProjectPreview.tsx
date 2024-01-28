import { useContentful } from '../../../hooks/useContentful';
import { useTextStyles } from '../../../hooks/useTextStyles';
import { fieldsProject } from '../../../type/filedsProject.type';
import './_ProjectPreview.scss'
import { useState, useEffect } from 'react';

export const ProjectPreview = () => {

    const textStyles = useTextStyles();
    const [project, setProject] = useState<fieldsProject[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
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
                            <p className={`${textStyles.hightBody}`}>[{index + 1}]</p>
                            <h2 className={`${textStyles.hightBody}`}>
                                <a href={`/project/${project.slug}`}>{project.title}</a>
                            </h2>
                        </div>
                        <h3>{project.typeProject}</h3>
                    </div>
                    <div className='container__projectPreview--image'>
                        {project?.thumbnail.map((image: string, index: number) => (
                            <img
                                key={index}
                                src={image.fields.file.url}
                                alt={image.fields.title}
                                width={image.fields.file.details.image.width}
                                height={image.fields.file.details.image.height}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};