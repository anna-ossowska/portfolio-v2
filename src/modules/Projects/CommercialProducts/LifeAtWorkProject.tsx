import { ReactElement } from 'react';
import {
    lifeAtWorkIndustryList,
    lifeAtWorkRespList,
    lifeAtWorkRolesList,
    lifeAtWorkTechList2,
} from '../../../config/data';
import { CommercialProduct } from './components/index';

const LifeAtWorkProject = (): ReactElement => {
    return (
        <div>
            <CommercialProduct
                projectTitle={<>Life@Work</>}
                industryList={lifeAtWorkIndustryList}
                rolesList={lifeAtWorkRolesList}
                projectDescription="Life@Work is a digital platform where building owners have an opportunity to collect all services and resources for a building in a common portal. Thus, both tenants, operating organizations and building owners can use a common digital solution for everything to do with a building, as well as have access to services based on their role and needs.."
                techList={lifeAtWorkTechList2}
                respList={lifeAtWorkRespList}
            />
        </div>
    );
};

export default LifeAtWorkProject;
