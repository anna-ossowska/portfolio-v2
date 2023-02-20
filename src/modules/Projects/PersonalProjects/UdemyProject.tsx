import { ReactElement } from 'react';
import { udemyCourseDescription, udemyCourseTechList1 } from '../../../config/data';
import { PersonalProject } from './components';

const UdemyProject = (): ReactElement => {
    return (
        <PersonalProject
            projectTitle={<>Udemy</>}
            yearOfCreation="2021"
            projectLink={'https://www.udemy.com/course/use-powerpoint-like-a-professional-designer/'}
            projectDescription={udemyCourseDescription}
            techList={udemyCourseTechList1}
        />
    );
};

export default UdemyProject;
