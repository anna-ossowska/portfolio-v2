import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { RegularHeader, ProjectContainer, BackButton } from '../../../../common/index';

const ProjectTitleWrapper = styled.h2`
    & h2 {
        color: var(--color-text-light-2);
        font-size: 66px;
        margin-bottom: 10px;
        letter-spacing: 0.06rem;

        @media only screen and (max-width: 992px) {
            font-size: 65px;
        }

        @media only screen and (max-width: 600px) {
            font-size: 50px;
        }
    }
`;

const ProjectIntro = styled.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 30px;
`;

const ProjectMainInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--color-text-light-2);
    font-size: 18px;

    & a {
        color: var(--color-text-light-2);
    }

    & span.span-decorator {
        font-family: var(--font-family-secondary);
        color: var(--color-text-highlight);
        margin-right: 5px;
    }

    @media only screen and (max-width: 600px) {
        gap: 15px;
        font-size: 15px;
    }
`;

const StyledList = styled.ul`
    padding: 0;
    overflow: hidden;
    list-style: none;

    & li {
        position: relative;
        margin-bottom: 10px;
        padding-left: 25px;
        color: var(--color-text-light-1);
        font-family: var(--font-family-secondary);
        font-size: 16px;

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

        @media only screen and (max-width: 600px) {
            font-size: 13px;
        }
    }
`;

const ProjectTechnologyList = styled.section``;

const ProjectImagesContainer = styled.section``;

interface PersonalProjectProps {
    projectTitle: string | ReactNode;
    yearOfCreation: string;
    projectLink: string;
    githubLink?: string;
    projectDescription: string;
    techList: string[];
    imagePaths?: string[];
}

const PersonalProject = ({
    projectTitle,
    yearOfCreation,
    projectLink,
    githubLink,
    projectDescription,
    techList,
    imagePaths,
}: PersonalProjectProps): ReactElement => {
    return (
        <ProjectContainer>
            <BackButton />
            <ProjectIntro>
                <ProjectTitleWrapper>
                    <h2>{projectTitle}</h2>
                </ProjectTitleWrapper>
                <ProjectMainInfoWrapper>
                    <div>
                        <span className="span-decorator">Year of creation:</span>
                        {yearOfCreation}
                    </div>
                    <div>
                        <span className="span-decorator">Project link:</span>
                        <a href={projectLink} target="_blank" rel="noopener noreferrer">
                            {projectLink}
                        </a>
                    </div>
                    {githubLink && (
                        <div>
                            <span className="span-decorator">Github link:</span>
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                {githubLink}
                            </a>
                        </div>
                    )}
                </ProjectMainInfoWrapper>
                <div>{projectDescription}</div>
            </ProjectIntro>

            <ProjectTechnologyList>
                <RegularHeader title="Technologies" />
                <StyledList>
                    {techList.map((el, index) => {
                        return <li key={`techList-${index}`}>{el}</li>;
                    })}
                </StyledList>
            </ProjectTechnologyList>

            {imagePaths && (
                <ProjectImagesContainer>
                    {imagePaths?.map((path, index) => {
                        return <img key={`personalProject-img-${index}`} src={path} alt="personalProject" />;
                    })}
                </ProjectImagesContainer>
            )}
        </ProjectContainer>
    );
};

export default PersonalProject;
