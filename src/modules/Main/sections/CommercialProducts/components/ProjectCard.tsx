import { ReactElement } from 'react';
import styled from 'styled-components';
import { IconExternalLink, IconHome } from '../../../../../assets/icons/index';
import { Button } from '../../../../../common/index';
import { TechnologyList } from './index';

const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    min-height: 400px;
    margin-bottom: 100px;

    @media only screen and (max-width: 992px) {
        display: flex;
        flex-direction: column;
        min-height: 300px;
        margin-bottom: 20px;
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
    imagePath: string;
}

const ProjectImageWrapper = styled.div`
    width: 100%;
    z-index: 1;
    position: relative;
    grid-area: ${({ contentLeft }: ProjectImageWrapperProps) => (contentLeft ? '1 / 7 / 1 / 13' : '1 / 1 / 1 / 7')};

    & div {
        background-image: ${({ imagePath }: ProjectImageWrapperProps) => (imagePath ? `url(${imagePath})` : '')};
        background-repeat: no-repeat;
        background-size: 100%;
        height: 100%;
        width: 100%;
        background-position: center;
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

const ProjectRole = styled.h5`
    color: var(--color-text-highlight);
    font-family: var(--font-family-secondary);
    font-size: 16px;
    font-weight: var(--font-weight-ligh);
    text-align: right;
    margin-bottom: 10px;

    @media only screen and (max-width: 992px) {
        text-align: left;
    }

    @media only screen and (max-width: 600px) {
        font-size: 14px;
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

const ProjectLinkList = styled.div`
    display: flex;
    gap: 20px;

    & svg {
        height: 23px;
        color: var(--color-text-light-2);
        transition: color 0.2s;
    }

    & .feather-home {
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

interface ProjectCardProps {
    projectTitle: string;
    projectDescription: string;
    contentLeft: boolean;
    techList: string[];
    projectLink?: string;
    internalLink: string;
    externalLink: string;
    imagePath: string;
    projectRole: string;
}

const ProjectCard = ({
    projectTitle,
    projectDescription,
    contentLeft,
    techList,
    projectLink,
    internalLink,
    externalLink,
    imagePath,
    projectRole,
}: ProjectCardProps): ReactElement => {
    return (
        <ProjectContainer>
            <ProjectContentWrapper contentLeft={contentLeft}>
                <ProjectRole>{projectRole}</ProjectRole>
                <ProjectTitle>{projectTitle}</ProjectTitle>
                <ProjectDescription contentLeft={contentLeft}>{projectDescription}</ProjectDescription>
                <TechnologyList techList={techList} />
                <ProjectLinkList>
                    {
                        <a href={projectLink} target="_blank" rel="noopener noreferrer">
                            <IconHome />
                        </a>
                    }
                    <a href={externalLink} target="_blank" rel="noopener noreferrer">
                        <IconExternalLink />
                    </a>
                </ProjectLinkList>
                <ButtonContainer>
                    <Button message="Learn More" large={false} path={internalLink} />
                </ButtonContainer>
            </ProjectContentWrapper>
            <ProjectImageWrapper contentLeft={contentLeft} imagePath={imagePath}>
                <div />
            </ProjectImageWrapper>
        </ProjectContainer>
    );
};

export default ProjectCard;
