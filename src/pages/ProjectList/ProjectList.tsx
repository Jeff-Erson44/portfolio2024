import { ProjectPreview } from '../../components/Organisms/ProjectPreview/ProjectPreview';
import './_ProjectList.scss'

export const ProjectList = () => {
    return (
        <section className='container__projectList'>
            <ProjectPreview />
        </section>
    );
};