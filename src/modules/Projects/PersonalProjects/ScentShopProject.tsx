import { ReactElement } from 'react';
import { scentShopDescription, scentShopTechList2 } from '../../../config/data';
import { PersonalProject } from './components';

const ScentShopProject = (): ReactElement => {
    return (
        <PersonalProject
            projectTitle={<>ScentShop</>}
            yearOfCreation="2021"
            projectLink={'https://scent-shop.azurewebsites.net/'}
            githubLink={'https://github.com/anna-ossowska/ScentShop/tree/master/ScentShop/ScentShop'}
            projectDescription={scentShopDescription}
            techList={scentShopTechList2}
        />
    );
};

export default ScentShopProject;
