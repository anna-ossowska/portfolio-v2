import { ReactElement } from 'react';
import { outdoorDescription, outdoorTechList2 } from '../../../config/data';
import { PersonalProject } from './components';

const OutdoorProject = (): ReactElement => {
    return (
        <PersonalProject
            projectTitle={<>Outdoor</>}
            yearOfCreation="2021"
            projectLink={'https://outdoor-application.netlify.app/'}
            githubLink={'https://github.com/anna-ossowska/outdoor-app'}
            projectDescription={outdoorDescription}
            techList={outdoorTechList2}
        />
    );
};

export default OutdoorProject;
