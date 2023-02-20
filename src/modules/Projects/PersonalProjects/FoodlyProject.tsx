import { ReactElement } from 'react';
import { foodlyDescription, foodlyTechList2 } from '../../../config/data';
import { PersonalProject } from './components/index';

const FoodlyProject = (): ReactElement => {
    return (
        <PersonalProject
            projectTitle={<>Foodly</>}
            yearOfCreation="2021"
            projectLink={'https://foodly-app.netlify.app/'}
            githubLink={'https://github.com/anna-ossowska/foodly-app'}
            projectDescription={foodlyDescription}
            techList={foodlyTechList2}
        />
    );
};

export default FoodlyProject;
