import { ReactElement } from 'react';
import {
    fatlandIndustryList,
    fatlandRolesList,
    fatlandTechList2,
    fatlandRespList,
    fatlandDescription,
} from '../../../config/data';
import { CommercialProduct } from './components/index';

const FatlandProject = (): ReactElement => {
    return (
        <div>
            <CommercialProduct
                projectTitle={<>MittFatland</>}
                industryList={fatlandIndustryList}
                rolesList={fatlandRolesList}
                projectDescription={fatlandDescription}
                techList={fatlandTechList2}
                respList={fatlandRespList}
            />
        </div>
    );
};

export default FatlandProject;
