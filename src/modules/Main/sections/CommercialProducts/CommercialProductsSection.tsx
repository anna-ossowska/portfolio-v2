import { ReactElement } from 'react';
import styled from 'styled-components';
import FatlandImg from '../../../../assets/images/projects/fatland/fatland-main.jpg';
import LifeAtWorkImg from '../../../../assets/images/projects/lifeatwork/lifeatwork-main.jpg';
import SolinegraImg from '../../../../assets/images/projects/solintegra/solintegra-main.jpg';
import { NumberedHeader, ScrollAdjustment } from '../../../../common/index';
import {
    fatlandDescription,
    fatlandTechList1,
    lifeAtWorkDescription,
    lifeAtWorkTechList1,
    solintegraDescription,
    solintegraTechList1,
} from '../../../../config/data';
import { PROJECTS, FATLAND_PROJECT, LIFE_AT_WORK_PROJECT, SOLINTEGRA_PROJECT } from '../../../../navigation/constants';
import { StyledSection } from '../../components/index';
import { ProjectCard } from './components/index';

const MainContainer = styled.div`
    position: relative;
`;

const CommercialProductsSection = (): ReactElement => {
    return (
        <MainContainer>
            <ScrollAdjustment elementId="commercial-products" />
            <StyledSection>
                <NumberedHeader headerNumber="03" title="Commercial products" />
                <ProjectCard
                    projectTitle="Solintegra Partner Portal"
                    projectDescription={solintegraDescription}
                    contentLeft={false}
                    techList={solintegraTechList1}
                    projectLink="https://partner.solintegra.no"
                    internalLink={`/${PROJECTS}/${SOLINTEGRA_PROJECT}`}
                    externalLink="https://www.solintegra.no/"
                    imagePath={SolinegraImg}
                    projectRole={'Lead Front-end Developer, Tech Lead, Consultant'}
                />

                <ProjectCard
                    projectTitle="Life@Work"
                    projectDescription={lifeAtWorkDescription}
                    contentLeft={true}
                    techList={lifeAtWorkTechList1}
                    projectLink="https://www.lifeatwork.as/"
                    internalLink={`/${PROJECTS}/${LIFE_AT_WORK_PROJECT}`}
                    externalLink="https://veni.no/lifeatwork/"
                    imagePath={LifeAtWorkImg}
                    projectRole={'Front-end Developer'}
                />

                <ProjectCard
                    projectTitle="Mitt Fatland"
                    projectDescription={fatlandDescription}
                    contentLeft={false}
                    techList={fatlandTechList1}
                    projectLink="https://mittfatland.no/"
                    internalLink={`/${PROJECTS}/${FATLAND_PROJECT}`}
                    externalLink="https://www.fatland.no/newsread/index.aspx"
                    imagePath={FatlandImg}
                    projectRole={'Front-end Developer, Consultant'}
                />
            </StyledSection>
        </MainContainer>
    );
};

export default CommercialProductsSection;
