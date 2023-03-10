import { ReactElement } from 'react';
import styled from 'styled-components';
import { NumberedHeader, ScrollAdjustment } from '../../../../common/index';
import {
    advisionTechList1,
    foodlyTechList1,
    outdoorTechList1,
    scentShopTechList1,
    trelloCloneTechList1,
    udemyCourseTechList1,
} from '../../../../config/data';
import {
    ADVISION_PROJECT,
    FOODLY_PROJECT,
    OUTDOOR_PROJECT,
    PROJECTS,
    SCENTSHOP_PROJECT,
    UDEMY_PROJECT,
} from '../../../../navigation/constants';
import { StyledSection } from '../../components/index';
import { PersonalProjectCard } from './components/index';

const MainContainer = styled.div`
    position: relative;
`;

const PersonalProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    position: relative;
`;

const PersonalProjectsSectionSection = (): ReactElement => {
    return (
        <MainContainer>
            <ScrollAdjustment elementId="personal-projects" />
            <StyledSection>
                <NumberedHeader headerNumber="04" title="Personal Projects" />
                <div>
                    <PersonalProjectsWrapper>
                        <PersonalProjectCard
                            projectTitle="Foodly"
                            projectDescription="Foodly is a restaurant order taking app built in ReactJS. It application relies heavily on Redux Toolkit for the state management, as well as uses the Firebase real-time database."
                            techList={foodlyTechList1}
                            githubLink="https://github.com/anna-ossowska/foodly-app"
                            internalLink={`/${PROJECTS}/${FOODLY_PROJECT}`}
                            externalLink="https://foodly-app.netlify.app/"
                        />

                        <PersonalProjectCard
                            projectTitle="Outdoor"
                            projectDescription="Outdoor is an application designed for keeping track of workout location and training frequency. The project relies heavily on DOM manipulation and OOP paradigm."
                            techList={outdoorTechList1}
                            githubLink="https://github.com/anna-ossowska/outdoor-app"
                            internalLink={`/${PROJECTS}/${OUTDOOR_PROJECT}`}
                            externalLink="https://outdoor-application.netlify.app/"
                        />

                        <PersonalProjectCard
                            projectTitle="ScentShop"
                            projectDescription="ScentShop is a website designed for selling perfumes online. It was built mostly with C# and ASP.NET Core MVC 5."
                            techList={scentShopTechList1}
                            githubLink="https://github.com/anna-ossowska/ScentShop/tree/master/ScentShop/ScentShop"
                            internalLink={`/${PROJECTS}/${SCENTSHOP_PROJECT}`}
                            externalLink="https://scent-shop.azurewebsites.net/"
                        />

                        <PersonalProjectCard
                            projectTitle="Udemy Course"
                            projectDescription="I contributed to the global learning community by designing and publishing an online course on the Udemy platform about creating PowerPoint presentations and data visualizations. Currently, the course has more than 600 active students."
                            techList={udemyCourseTechList1}
                            internalLink={`/${PROJECTS}/${UDEMY_PROJECT}`}
                            externalLink="https://www.udemy.com/course/use-powerpoint-like-a-professional-designer/"
                        />

                        <PersonalProjectCard
                            projectTitle="Advision"
                            projectDescription="Advision is a website tailored for the consulting company. The project is utilizing the 7-1 pattern combined with BEM methodology."
                            techList={advisionTechList1}
                            githubLink="https://github.com/anna-ossowska/advision-v2"
                            internalLink={`/${PROJECTS}/${ADVISION_PROJECT}`}
                            externalLink="https://advision-company.netlify.app/"
                        />

                        <PersonalProjectCard
                            projectTitle="Trello Clone"
                            projectDescription="I'm currently dedicating my free time to working on a new project aimed at pushing the boundaries of the popular drag-and-drop library, React Beautiful Dnd. I'm excited about the possibilities this will unlock and can't wait to see where this project takes me."
                            techList={trelloCloneTechList1}
                            githubLink="https://github.com/anna-ossowska/trello-clone"
                        />
                    </PersonalProjectsWrapper>
                </div>
            </StyledSection>
        </MainContainer>
    );
};

export default PersonalProjectsSectionSection;
