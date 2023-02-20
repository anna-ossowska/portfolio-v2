import { ReactElement } from 'react';
import styled from 'styled-components';
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
import {
    COMMERCIAL_PRODUCTS,
    FATLAND_PROJECT,
    LIFE_AT_WORK_PROJECT,
    SOLINTEGRA_PROJECT,
} from '../../../../navigation/constants';
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
                    internalLink={`/${COMMERCIAL_PRODUCTS}/${SOLINTEGRA_PROJECT}`}
                    externalLink="https://www.solintegra.no/"
                    imagePath={SolinegraImg}
                />

                <ProjectCard
                    projectTitle="Life@Work"
                    projectDescription={lifeAtWorkDescription}
                    contentLeft={true}
                    techList={lifeAtWorkTechList1}
                    projectLink="https://www.lifeatwork.as/"
                    internalLink={`/${COMMERCIAL_PRODUCTS}/${LIFE_AT_WORK_PROJECT}`}
                    externalLink="https://veni.no/lifeatwork/"
                    imagePath="https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2459&q=80"
                />

                <ProjectCard
                    projectTitle="Mitt Fatland"
                    projectDescription={fatlandDescription}
                    contentLeft={false}
                    techList={fatlandTechList1}
                    projectLink="https://mittfatland.no/signin"
                    internalLink={`/${COMMERCIAL_PRODUCTS}/${FATLAND_PROJECT}`}
                    externalLink="https://www.fatland.no/newsread/index.aspx"
                    imagePath="https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2459&q=80"
                />
            </StyledSection>
        </MainContainer>
    );
};

export default CommercialProductsSection;
