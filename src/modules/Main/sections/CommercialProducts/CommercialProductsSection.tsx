import { ReactElement } from 'react';
import styled from 'styled-components';
import { IconExternalLink, IconGithub } from '../../../../assets/icons/index';
import { Button } from '../../../../common/index';
import { NumberedHeader, StyledSection } from '../../components/index';

const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    min-height: 300px;
    margin-bottom: 100px;

    @media only screen and (max-width: 992px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 60px;
        background: var(--color-primary-main-opaque);
        position: relative;
        transition: box-shadow 0.3s;

        &:hover {
            box-shadow: var(--box-shadow) var(--color-shadow);
            cursor: pointer;
        }
    }
`;

interface ProjectImageWrapperProps {
    contentLeft: boolean;
}

const ProjectImageWrapper = styled.div`
    width: 100%;
    z-index: 1;
    position: relative;
    grid-area: ${({ contentLeft }: ProjectImageWrapperProps) => (contentLeft ? '1 / 7 / 1 / 13' : '1 / 1 / 1 / 7')};

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

    @media only screen and (max-width: 992px) {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -2;

        & img {
            position: absolute;
            display: block;
            height: 100%;
            width: 100%;
            z-index: -1;
        }
    }
`;

interface ProjectContentWrapperProps {
    contentLeft: boolean;
}

const ProjectContentWrapper = styled.div`
    grid-area: ${({ contentLeft }: ProjectContentWrapperProps) => (contentLeft ? '1 / 1 / 1 / 7' : '1 / 7 / 1 / 13')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${({ contentLeft }: ProjectContentWrapperProps) => (contentLeft ? 'flex-start' : 'flex-end')};
    padding: 20px;
    padding: ${({ contentLeft }: ProjectContentWrapperProps) =>
        contentLeft ? '20px 20px 20px 0' : '20px 0 20px 20px'};

    @media only screen and (max-width: 992px) {
        align-items: flex-start;
        padding: 20px;
    }
`;

const ProjectTitle = styled.h4`
    color: var(--color-text-light-2);
    margin-bottom: 20px;

    @media only screen and (max-width: 600px) {
        font-size: 20px;
        margin-bottom: 10px;
    }
`;

interface ProjectDescriptionProps {
    contentLeft: boolean;
}

const ProjectDescription = styled.p`
    color: var(--color-text-light-1);
    background: var(--color-primary-dark);
    border-radius: var(--border-radius);
    padding: 20px;
    font-size: 16px;
    text-align: ${({ contentLeft }: ProjectDescriptionProps) => (contentLeft ? 'left' : 'right')};
    margin-bottom: 20px;
    width: 550px;
    z-index: 2;
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: var(--box-shadow) var(--color-shadow);
    }

    @media only screen and (max-width: 992px) {
        width: 100%;
        padding: 15px 0 10px;
        text-align: left;
        background: transparent;

        &:hover {
            box-shadow: none;
        }
    }

    @media only screen and (max-width: 600px) {
        margin-bottom: 10px;
    }
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

    @media only screen and (max-width: 992px) {
        flex-wrap: wrap;

        & li {
            margin-bottom: -12px;
        }
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

    & .feather-github {
        height: 21px;
        margin-top: 2px;
    }

    & a:hover {
        & svg {
            color: var(--color-secondary-highlight);
        }
    }

    @media only screen and (max-width: 992px) {
        margin-top: 10px;
    }
`;

const ButtonContainer = styled.div`
    margin-top: 16px;
`;

const CommercialProductsSection = (): ReactElement => {
    return (
        <StyledSection>
            <NumberedHeader headerNumber="03" title="Commercial products" />

            <ProjectContainer>
                <ProjectContentWrapper contentLeft={false}>
                    <ProjectTitle>Solintegra Partner Portal</ProjectTitle>
                    <ProjectDescription contentLeft={false}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi voluptatum quas
                        possimus cumque illo eligendi corporis suscipit dolorum porro quisquam explicabo quis natus ipsa
                        ipsum dolores soluta error iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </ProjectDescription>
                    <ProjectTechnologyList>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>AWS Aplify</li>
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
                    <ButtonContainer>
                        <Button message="Learn More" large={false} />
                    </ButtonContainer>
                </ProjectContentWrapper>
                <ProjectImageWrapper contentLeft={false}>
                    <img
                        src={
                            'https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2459&q=80'
                        }
                        alt="profile"
                    />
                </ProjectImageWrapper>
            </ProjectContainer>

            <ProjectContainer>
                <ProjectContentWrapper contentLeft>
                    <ProjectTitle>Life@Work</ProjectTitle>
                    <ProjectDescription contentLeft>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi voluptatum quas
                        possimus cumque illo eligendi corporis suscipit dolorum porro quisquam explicabo quis natus ipsa
                        ipsum dolores soluta error iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </ProjectDescription>
                    <ProjectTechnologyList>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>React Query</li>
                        <li>Styled Components</li>
                        <li>C#</li>
                    </ProjectTechnologyList>
                    <ProjectLinkList>
                        <a href="https://github.com/anna-ossowska" target="_blank" rel="noopener noreferrer">
                            <IconGithub />
                        </a>
                        <a href="https://github.com/anna-ossowska" target="_blank" rel="noopener noreferrer">
                            <IconExternalLink />
                        </a>
                    </ProjectLinkList>
                    <ButtonContainer>
                        <Button message="Learn More" large={false} />
                    </ButtonContainer>
                </ProjectContentWrapper>
                <ProjectImageWrapper contentLeft>
                    <img
                        src={
                            'https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2459&q=80'
                        }
                        alt="profile"
                    />
                </ProjectImageWrapper>
            </ProjectContainer>

            <ProjectContainer>
                <ProjectContentWrapper contentLeft={false}>
                    <ProjectTitle>Mitt Fatland</ProjectTitle>
                    <ProjectDescription contentLeft={false}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi voluptatum quas
                        possimus cumque illo eligendi corporis suscipit dolorum porro quisquam explicabo quis natus ipsa
                        ipsum dolores soluta error iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </ProjectDescription>
                    <ProjectTechnologyList>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Styled Components</li>
                        <li>Bootstrap</li>
                        <li>C#</li>
                    </ProjectTechnologyList>
                    <ProjectLinkList>
                        <a href="https://github.com/anna-ossowska" target="_blank" rel="noopener noreferrer">
                            <IconGithub />
                        </a>
                        <a href="https://github.com/anna-ossowska" target="_blank" rel="noopener noreferrer">
                            <IconExternalLink />
                        </a>
                    </ProjectLinkList>
                    <ButtonContainer>
                        <Button message="Learn More" large={false} />
                    </ButtonContainer>
                </ProjectContentWrapper>
                <ProjectImageWrapper contentLeft={false}>
                    <img
                        src={
                            'https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2459&q=80'
                        }
                        alt="profile"
                    />
                </ProjectImageWrapper>
            </ProjectContainer>
        </StyledSection>
    );
};

export default CommercialProductsSection;
