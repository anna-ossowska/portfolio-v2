import { ReactElement } from 'react';
import styled from 'styled-components';
import Profile from '../../../../assets/images/profile.png';
import { NumberedHeader, ScrollAdjustment } from '../../../../common/index';
import { StyledSection } from '../../components/index';
import { StyledParagraph } from './components/index';

const MainContainer = styled.div`
    position: relative;
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

const AboutSection = (): ReactElement => {
    return (
        <MainContainer>
            <ScrollAdjustment elementId="about" />
            <StyledSection>
                <NumberedHeader headerNumber="01" title="About me" />
                <AboutSectionContainer>
                    <div>
                        <StyledParagraph>
                            I am currently working as a Front-end Developer and Consultant at Veni AS, a cutting-edge technology and innovation firm located in the beautiful city of Stavanger, Norway.
                        </StyledParagraph>

                        <StyledParagraph>
                            At Veni, I have the opportunity to leverage my passion for web development to create intuitive and responsive applications for clients in diverse industries such as renewable energy, building, retail, and food production. I take pride in collaborating with cross-functional teams using Scrum methodology to ensure successful project delivery.
                        </StyledParagraph>
                        
                        <StyledParagraph>
                            Before joining Veni, my interest in programming and web development grew while working as a Graphic Designer at Bain & Company. In 2020, I relocated to Norway and pursued a Full-stack Web Development Program at Le Wagon Coding School in Oslo. Since then, I have been dedicated to expanding my programming and design skills by working on various coding projects and completing multiple online courses.
                        </StyledParagraph>
                        
                        <StyledParagraph>
                            To further my knowledge, I obtained certifications in a range of programming topics, including React, TypeScript, JavaScript, CSS, Sass, Figma prototyping, responsive design, and C#. You can check out my coding journey in the ‘Projects’ section, as well as on my GitHub profile.
                        </StyledParagraph>
                    </div>
                    <ImageContainer>
                        <StyledImage src={Profile} alt="profile" />
                    </ImageContainer>
                </AboutSectionContainer>
            </StyledSection>
        </MainContainer>
    );
};

export default AboutSection;
