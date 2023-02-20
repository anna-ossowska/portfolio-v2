import { ReactElement } from 'react';
import {
    solintegraDescription,
    solintegraIndustryList,
    solintegraRespList,
    solintegraRolesList,
    solintegraTechList2,
    solintegraUserStoriesList,
    userStoriesImages,
} from '../../../config/data';
import { CommercialProduct } from './components/index';

const SolintegraProject = (): ReactElement => {
    return (
        <div>
            <CommercialProduct
                projectTitle={
                    <>
                        Solintegra
                        <br />
                        Partner Portal
                    </>
                }
                industryList={solintegraIndustryList}
                rolesList={solintegraRolesList}
                projectDescription={solintegraDescription}
                techList={solintegraTechList2}
                respList={solintegraRespList}
                userStoriesList={solintegraUserStoriesList}
                userStoriesImages={userStoriesImages}
            />
        </div>
    );
};

export default SolintegraProject;
