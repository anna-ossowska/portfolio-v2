import { ReactElement } from 'react';
import styled from 'styled-components';
import { NumberedHeader } from '../../../../common/index';
import { advisionTechList1, foodlyTechList1, outdoorTechList1, scentShopTechList1 } from '../../../../config/data';
import { StyledSection } from '../../components/index';
import { PersonalProjectCard } from './components/index';

const PersonalProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    position: relative;
`;

const PersonalProjectsSectionSection = (): ReactElement => {
    return (
        <StyledSection>
            <NumberedHeader headerNumber="04" title="Coding Projects" />
            <div>
                <PersonalProjectsWrapper>
                    <PersonalProjectCard
                        projectTitle="Foodly"
                        projectDescription="Foodly is a restaurant order taking app built in ReactJS. It application relies heavily on Redux Toolkit for the state management, as well as uses the Firebase real-time database."
                        techList={foodlyTechList1}
                        projectDetailsPath="https://github.com/anna-ossowska"
                        githubLink="https://github.com/anna-ossowska"
                        externalLink="https://github.com/anna-ossowska"
                    />

                    <PersonalProjectCard
                        projectTitle="Outdoor"
                        projectDescription="Outdoor is an application designed for keeping track of workout location and training frequency. The project relies heavily on DOM manipulation and OOP paradigm."
                        techList={outdoorTechList1}
                        projectDetailsPath="https://github.com/anna-ossowska"
                        githubLink="https://github.com/anna-ossowska"
                        externalLink="https://github.com/anna-ossowska"
                    />

                    <PersonalProjectCard
                        projectTitle="ScentShop"
                        projectDescription="ScentShop is a website designed for selling perfumes online. It was built mostly with C# and ASP.NET Core MVC 5."
                        techList={scentShopTechList1}
                        projectDetailsPath="https://github.com/anna-ossowska"
                        githubLink="https://github.com/anna-ossowska"
                        externalLink="https://github.com/anna-ossowska"
                    />

                    <PersonalProjectCard
                        projectTitle="Advision"
                        projectDescription="Advision is a website tailored for the consulting company. The project is utilizing the 7-1 pattern combined with BEM methodology."
                        techList={advisionTechList1}
                        projectDetailsPath="https://github.com/anna-ossowska"
                        githubLink="https://github.com/anna-ossowska"
                        externalLink="https://github.com/anna-ossowska"
                    />
                </PersonalProjectsWrapper>
            </div>
        </StyledSection>
    );
};

export default PersonalProjectsSectionSection;
