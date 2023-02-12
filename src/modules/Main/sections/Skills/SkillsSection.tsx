import { ReactElement } from 'react';
import styled from 'styled-components';
import { NumberedHeader, StyledSection } from '../../components/index';

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

const SkillsSection = (): ReactElement => {
    return (
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
                        <ListElement>JavaScript (ES6)</ListElement>
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
    );
};

export default SkillsSection;
