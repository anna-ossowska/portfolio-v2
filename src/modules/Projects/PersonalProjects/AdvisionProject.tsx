import { ReactElement } from 'react';
import { advisionDescription, advisionTechList2 } from '../../../config/data';
import { PersonalProject } from './components/index';

const AdvisionProject = (): ReactElement => {
    return (
        <PersonalProject
            projectTitle={<>Advision</>}
            yearOfCreation="2021"
            projectLink={'https://advision-company.netlify.app/'}
            githubLink={'https://github.com/anna-ossowska/advision-v2'}
            projectDescription={advisionDescription}
            techList={advisionTechList2}
        />
    );
};

export default AdvisionProject;
