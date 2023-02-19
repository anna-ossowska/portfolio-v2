import { ReactElement } from 'react';
import { foodlyDescription, foodlyTechList2 } from '../../../config/data';
import { CodingProject } from './components';

const FoodlyProject = (): ReactElement => {
    return (
        <CodingProject
            projectTitle={<>Foodly</>}
            yearOfCreation="2021"
            projectLink={'https://foodly-app.netlify.app/'}
            githubLink={'https://github.com/anna-ossowska/foodly-app'}
            projectDescription={foodlyDescription}
            techList={foodlyTechList2}
            imagePaths={['']}
        />
    );
};

export default FoodlyProject;
