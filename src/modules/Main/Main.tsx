import { ReactElement } from 'react';
import styled from 'styled-components';
import { IconGithub, IconExternalLink } from '../../assets/icons/index';
import Profile from '../../assets/images/profile.png';
import { Banner, NumberedHeader } from './components';

const StyledSection = styled.div`
    padding: 0 150px;
    margin-bottom: 150px;

    @media only screen and (max-width: 992px) {
        padding: 0 100px;
    }

    @media only screen and (max-width: 768px) {
        padding: 0 50px;
    }
`;

const StyledParagraph = styled.p`
    text-align: justify;
    margin: 0 0 15px;
    width: 90%;
    font-size: 18px;

    @media only screen and (max-width: 992px) {
        width: 100%;
    }
`;

const AboutSectionContainer = styled.div`
    display: flex;

    @media only screen and (max-width: 992px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ImageContainer = styled.div`
    margin-top: 8px;
    position: relative;

    @media only screen and (max-width: 992px) {
        margin-top: 30px;
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 22px;
        left: 22px;
        width: 300px;
        height: 300px;
        border: solid var(--color-secondary-highlight) 1px;
        border-radius: var(--border-radius);
        z-index: -1;
    }
`;

const StyledImage = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: var(--border-radius);
`;

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 20px;

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`;

const SkillsWrapper = styled.div`
    background: var(--color-primary-dark);
    min-height: 300px;
    padding: 20px;
    border-radius: var(--border-radius);

    @media only screen and (max-width: 600px) {
        min-height: 200px;
    }
`;

interface StyledListProps {
    isTwoColumnLayout: boolean;
}

const StyledList = styled.ul`
    display: grid;
    grid-template-columns: ${({ isTwoColumnLayout }: StyledListProps) =>
        isTwoColumnLayout ? `repeat(2, minmax(140px, 250px))` : `1fr`};
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const ListHeader = styled.h4`
    color: var(--color-text-highlight);
    font-weight: var(--font-weight-regular);
    font-size: 18px;
    letter-spacing: 0.02rem;

    @media only screen and (max-width: 600px) {
        font-size: 16px;
    }
`;

const ListElement = styled.li`
    position: relative;
    margin-bottom: 10px;
    padding-left: 25px;
    font-size: 15px;
    font-family: var(--font-family-secondary);
    color: var(--color-text-light-1);

    @media only screen and (max-width: 600px) {
        font-size: 13px;
    }

    &:before {
        content: '▹';
        position: absolute;
        left: 0;
        top: -2px;
        color: var(--color-text-highlight);
        font-size: 18px;

        @media only screen and (max-width: 600px) {
            top: -4px;
        }
    }
`;

const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    min-height: 300px;
`;

const ProjectImageWrapper = styled.div`
    width: 100%;
    z-index: 1;
    position: relative;
    grid-area: 1 / 1 / 1 / 7;

    & img {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
        cursor: pointer;
        transition: var(--custom-transition);

        &:hover {
            filter: none;
        }
    }
`;

const ProjectContentWrapper = styled.div`
    grid-area: 1 / 7 / 1 / 13;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 20px;
`;

const ProjectTitle = styled.h4`
    color: var(--color-text-light-2);
    margin-bottom: 20px;
`;

const ProjectDescription = styled.p`
    color: var(--color-text-light-1);
    background: var(--color-primary-dark);
    padding: 20px;
    font-size: 16px;
    text-align: right;
    margin-bottom: 20px;
    width: 550px;
    z-index: 2;
`;

const ProjectTechnologyList = styled.ul`
    display: flex;
    gap: 18px;
    list-style-type: none;
    font-family: var(--font-family-secondary);
    color: var(--color-text-light-1);
    margin-bottom: 20px;

    & li {
        font-size: 13px;
    }
`;

const ProjectLinkList = styled.div`
    display: flex;
    gap: 20px;

    & svg {
        height: 23px;
        color: var(--color-text-light-2);
        transition: color 0.2s;
    }

    & a:hover {
        & svg {
            color: var(--color-secondary-highlight);
        }
    }
`;

const Main = (): ReactElement => {
    return (
        <div>
            <Banner />
            <StyledSection>
                <NumberedHeader headerNumber="01" title="About me" />
                <AboutSectionContainer>
                    <div>
                        <StyledParagraph>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus itaque exercitationem
                            explicabo numquam dolores iste ad laboriosam nobis ducimus voluptatem? Placeat magnam
                            recusandae inventore atque, distinctio quidem officiis, accusantium, nulla ullam facere
                            fugiat. Nostrum numquam, ullam sunt nihil corrupti vel inventore soluta dolores fugit
                            aperiam minus repudiandae, deserunt, voluptatibus hic.
                        </StyledParagraph>

                        <StyledParagraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cum itaque? Totam amet ipsa
                            architecto officiis ipsum magni sequi dicta quae aliquid illum? Magnam consequuntur eligendi
                            quidem necessitatibus asperiores similique porro non odit ut, qui iste minima ratione fugit
                            voluptatibus, neque nemo in quia inventore magni officiis, ullam id atque? Libero iusto
                            consequatur voluptate deserunt incidunt rerum dolor minus id temporibus qui perferendis,
                            perspiciatis ratione.
                        </StyledParagraph>
                    </div>
                    <ImageContainer>
                        <StyledImage src={Profile} alt="profile" />
                    </ImageContainer>
                </AboutSectionContainer>
            </StyledSection>
            <StyledSection>
                <NumberedHeader headerNumber="02" title="Skills" />

                <SkillsContainer>
                    <SkillsWrapper>
                        <ListHeader>Front-end Development:</ListHeader>
                        <StyledList isTwoColumnLayout={true}>
                            <ListElement>React</ListElement>
                            <ListElement>Styled Components</ListElement>
                            <ListElement>TypeScript</ListElement>
                            <ListElement>Bootstrap</ListElement>
                            <ListElement>Java Script (ES6)</ListElement>
                            <ListElement>CSS</ListElement>
                            <ListElement>Redux & Redux Toolkit</ListElement>
                            <ListElement>HTML5</ListElement>
                            <ListElement>Material UI</ListElement>
                            <ListElement>Responsive Web Design</ListElement>
                            <ListElement>Sass</ListElement>
                            <ListElement>Web Accessibility</ListElement>
                        </StyledList>
                    </SkillsWrapper>

                    <SkillsWrapper>
                        <ListHeader>Other Development Tools:</ListHeader>
                        <StyledList isTwoColumnLayout={false}>
                            <ListElement>AWS Amplify</ListElement>
                            <ListElement>Git</ListElement>
                            <ListElement>C#</ListElement>
                            <ListElement>Big 0</ListElement>
                        </StyledList>
                    </SkillsWrapper>

                    <SkillsWrapper>
                        <ListHeader>Project Management:</ListHeader>
                        <StyledList isTwoColumnLayout={false}>
                            <ListElement>SCRUM</ListElement>
                            <ListElement>DevOps</ListElement>
                            <ListElement>GitHub</ListElement>
                            <ListElement>Monday</ListElement>
                            <ListElement>Confluence</ListElement>
                        </StyledList>
                    </SkillsWrapper>

                    <SkillsWrapper>
                        <ListHeader>Graphic & Web Design:</ListHeader>
                        <StyledList isTwoColumnLayout={false}>
                            <ListElement>Figma</ListElement>
                            <ListElement>UI & UX</ListElement>
                            <ListElement>Data Visualization</ListElement>
                            <ListElement>Presentation Design</ListElement>
                            <ListElement>Adobe Creative Cloud</ListElement>
                            <ListElement>Tableau</ListElement>
                        </StyledList>
                    </SkillsWrapper>
                </SkillsContainer>

                {/* <ListHeader>Popular libraries:</ListHeader>
                <StyledList>
                    <ListElement>React Hook Form</ListElement>
                    <ListElement>Yup</ListElement>
                    <ListElement>Axios</ListElement>
                    <ListElement>React Query</ListElement>
                    <ListElement>React Router</ListElement>
                    <ListElement>React Table</ListElement>
                    <ListElement>React Draggable</ListElement>
                </StyledList> */}
            </StyledSection>

            <StyledSection>
                <NumberedHeader headerNumber="03" title="Commercial products" />
                <ProjectContainer>
                    <ProjectContentWrapper>
                        <ProjectTitle>Solintegra Partner Portal</ProjectTitle>
                        <ProjectDescription>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi voluptatum
                            quas possimus cumque illo eligendi corporis suscipit dolorum porro quisquam explicabo quis
                            natus ipsa ipsum dolores soluta error iure. Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit.
                        </ProjectDescription>
                        <ProjectTechnologyList>
                            <li>React</li>
                            <li>AWS Aplify</li>
                            <li>TypeScript</li>
                            <li>Material UI</li>
                            <li>Redux Toolkit</li>
                        </ProjectTechnologyList>
                        <ProjectLinkList>
                            <a href="https://github.com/anna-ossowska" target="_blank" rel="noopener noreferrer">
                                <IconGithub />
                            </a>
                            <a href="https://github.com/anna-ossowska" target="_blank" rel="noopener noreferrer">
                                <IconExternalLink />
                            </a>
                        </ProjectLinkList>
                    </ProjectContentWrapper>
                    <ProjectImageWrapper>
                        <img
                            src={
                                'https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2459&q=80'
                            }
                            alt="profile"
                        />
                    </ProjectImageWrapper>
                </ProjectContainer>
            </StyledSection>
        </div>
    );
};

export default Main;
