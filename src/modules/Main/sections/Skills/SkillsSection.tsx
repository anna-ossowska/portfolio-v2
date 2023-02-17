import { ReactElement } from 'react';
import styled from 'styled-components';
import { NumberedHeader } from '../../../../common/index';
import { frontEndSkills, graphicDesignSkills, otherSkills, projectManagmentSkills } from '../../../../config/data';
import { StyledSection } from '../../components/index';
import { StyledList } from './components/index';

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

const ListHeader = styled.h4`
    color: var(--color-text-highlight);
    font-weight: var(--font-weight-regular);
    font-size: 18px;
    letter-spacing: 0.02rem;

    @media only screen and (max-width: 600px) {
        font-size: 16px;
    }
`;

const SkillsSection = (): ReactElement => {
    return (
        <StyledSection>
            <NumberedHeader headerNumber="02" title="Skills" />

            <SkillsContainer>
                <SkillsWrapper>
                    <ListHeader>Front-end Development:</ListHeader>
                    <StyledList isTwoColumnLayout={true} skills={frontEndSkills} />
                </SkillsWrapper>
                <SkillsWrapper>
                    <ListHeader>Other Development Tools:</ListHeader>
                    <StyledList isTwoColumnLayout={false} skills={otherSkills} />
                </SkillsWrapper>
                <SkillsWrapper>
                    <ListHeader>Project Management:</ListHeader>
                    <StyledList isTwoColumnLayout={false} skills={projectManagmentSkills} />
                </SkillsWrapper>
                <SkillsWrapper>
                    <ListHeader>Graphic & Web Design:</ListHeader>
                    <StyledList isTwoColumnLayout={false} skills={graphicDesignSkills} />
                </SkillsWrapper>
            </SkillsContainer>
        </StyledSection>
    );
};

export default SkillsSection;
