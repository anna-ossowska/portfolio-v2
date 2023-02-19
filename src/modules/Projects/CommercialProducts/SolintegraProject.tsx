import { ReactElement } from 'react';
import {
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
                projectDescription="Solintegra is a back-office solution where Partners are empowered to take part in the green shift by getting the know-how and possibility to easily estimate prices and number of solar panels fitting a roof. In addition, the portal helps with the process of advising customers independently on the use, planning and pricing for building integrated solar panel solutions (BIPV)."
                techList={solintegraTechList2}
                respList={solintegraRespList}
                userStoriesList={solintegraUserStoriesList}
                userStoriesImages={userStoriesImages}
            />
        </div>
    );
};

export default SolintegraProject;
