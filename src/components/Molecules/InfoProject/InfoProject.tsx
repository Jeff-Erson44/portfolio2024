import { useParams } from 'react-router-dom';
import { useContentful } from '../../../hooks/useContentful';
import './_InfoProject.scss';
import { useState, useEffect } from 'react';
import { infoProject } from '../../../data/infoProject.data';
import { fieldsProject } from '../../../type/fieldsProject';

export const InfoProject = () => {
    const { slug } = useParams();
    const [project, setProject] = useState<fieldsProject | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const items = await useContentful();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const dataFecth = items.map((item: any) => item.fields);
                const matchedProject = dataFecth.find((p: fieldsProject) => p.slug === slug);
                setProject(matchedProject);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {infoProject.map((item, index) => (
                <div className='container__item' key={index}>
                    <h4>{item.name}</h4>
                    {Array.isArray(project?.[item.content as keyof fieldsProject]) ? (
                        <p>{Array.isArray(project?.[item.content as keyof fieldsProject]) ? (project?.[item.content as keyof fieldsProject] as string[]).join(' - ') : project?.[item.content as keyof fieldsProject]}</p>
                    ) : (
                        <p>{project?.[item.content as keyof fieldsProject]}</p>
                    )}
                </div>
            ))}
        </>
    );
};