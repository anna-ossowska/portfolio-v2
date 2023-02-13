import { ReactElement } from 'react';
import styled from 'styled-components';
import {
    advisionTechList,
    buddyLinguaTechList,
    foodlyTechList,
    outdoorTechList,
    restCountriesTechList,
    scentShopTechList,
} from '../../../../config/data';
import { NumberedHeader, StyledSection } from '../../components/index';
import { CodingProjectCard } from './components/index';

const CodingProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    position: relative;
`;

const CodingProjectsSectionSection = (): ReactElement => {
    return (
        <StyledSection>
            <NumberedHeader headerNumber="04" title="Coding Projects" />
            <div>
                <CodingProjectsWrapper>
                    <CodingProjectCard
                        projectTitle="Foodly"
                        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis maiores impedit, perferendis eveniet sequi similique dolorem nobis possimus aperiam."
                        techList={foodlyTechList}
                        projectDetailsPath="https://github.com/anna-ossowska"
                        githubLink="https://github.com/anna-ossowska"
                        externalLink="https://github.com/anna-ossowska"
                    />

                    <CodingProjectCard
                        projectTitle="ScentShop"
                        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis maiores impedit, perferendis eveniet sequi similique dolorem nobis possimus aperiam quidem cum consequatur vero laboriosam molestias debitis itaque hic ullam amet ex, doloremque beatae sed."
                        techList={scentShopTechList}
                        projectDetailsPath="https://github.com/anna-ossowska"
                        githubLink="https://github.com/anna-ossowska"
                        externalLink="https://github.com/anna-ossowska"
                    />

                    <CodingProjectCard
                        projectTitle="Outdoor"
                        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis maiores impedit, perferendis eveniet sequi similique dolorem nobis possimus aperiam"
                        techList={outdoorTechList}
                        projectDetailsPath="https://github.com/anna-ossowska"
                        githubLink="https://github.com/anna-ossowska"
                        externalLink="https://github.com/anna-ossowska"
                    />

                    <CodingProjectCard
                        projectTitle="Rest Countries"
                        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis maiores impedit, perferendis eveniet sequi similique dolorem nobis possimus aperiam"
                        techList={restCountriesTechList}
                        projectDetailsPath="https://github.com/anna-ossowska"
                        githubLink="https://github.com/anna-ossowska"
                        externalLink="https://github.com/anna-ossowska"
                    />

                    <CodingProjectCard
                        projectTitle="Advision"
                        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis maiores impedit, perferendis eveniet sequi similique dolorem nobis possimus aperiam"
                        techList={advisionTechList}
                        projectDetailsPath="https://github.com/anna-ossowska"
                        githubLink="https://github.com/anna-ossowska"
                        externalLink="https://github.com/anna-ossowska"
                    />

                    <CodingProjectCard
                        projectTitle="BuddyLingua"
                        projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis maiores impedit, perferendis eveniet sequi similique dolorem nobis possimus aperiam"
                        techList={buddyLinguaTechList}
                        projectDetailsPath="https://github.com/anna-ossowska"
                        githubLink="https://github.com/anna-ossowska"
                        externalLink="https://github.com/anna-ossowska"
                    />
                </CodingProjectsWrapper>
            </div>
        </StyledSection>
    );
};

export default CodingProjectsSectionSection;
