import { ReactElement } from 'react';
import {
    lifeAtWorkDescription,
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
                projectDescription={lifeAtWorkDescription}
                techList={lifeAtWorkTechList2}
                respList={lifeAtWorkRespList}
                projectLink={'https://www.lifeatwork.as/'}
                externalLink={'https://veni.no/lifeatwork/'}
            />
        </div>
    );
};

export default LifeAtWorkProject;
