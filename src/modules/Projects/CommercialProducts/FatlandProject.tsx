import { ReactElement } from 'react';
import { fatlandIndustryList, fatlandRolesList, fatlandTechList2, fatlandRespList } from '../../../config/data';
import { CommercialProduct } from './components/index';

const FatlandProject = (): ReactElement => {
    return (
        <div>
            <CommercialProduct
                projectTitle={<>MittFatland</>}
                industryList={fatlandIndustryList}
                rolesList={fatlandRolesList}
                projectDescription="MittFatland is a portal for Norwegian farmers and meat producers. It provides solutions for monitoring livestock production, as well as the efficient administration of purchase and sales activities."
                techList={fatlandTechList2}
                respList={fatlandRespList}
            />
        </div>
    );
};

export default FatlandProject;
