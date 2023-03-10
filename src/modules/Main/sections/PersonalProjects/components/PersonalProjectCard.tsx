import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IconExternalLink, IconFolder, IconGithub } from '../../../../../assets/icons/index';
import { TechnologyList } from './index';

const PersonalProjectContainer = styled.div`
    background: var(--color-primary-dark);
    height: 100%;
    padding: 20px;
    border-radius: var(--border-radius);
    transition: box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    & h4 {
        color: var(--color-text-light-2);
        font-size: 22px;
        margin-bottom: 5px;
    }

    & p {
        color: var(--color-text-light-1);
        font-size: 15px;
    }

    &:hover {
        box-shadow: var(--box-shadow) var(--color-shadow);
        cursor: pointer;
    }
`;

const IconGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    & .feather-folder {
        height: 40px;
        color: var(--color-text-highlight);
    }

    & .feather-external-link {
        height: 23px;
        color: var(--color-text-light-1);
        transition: color 0.2s;

        &:hover {
            color: var(--color-text-highlight);
        }
    }

    & .feather-github {
        height: 21px;
        color: var(--color-text-light-1);
        transition: color 0.2s;
        margin-top: 2px;

        &:hover {
            color: var(--color-text-highlight);
        }
    }
`;

const IconSubGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    width: 23%;
    z-index: 1;
`;

const ContentWrapper = styled.div``;

interface PersonalProjectCardProps {
    projectTitle: string;
    projectDescription: string;
    techList: string[];
    githubLink?: string;
    internalLink?: string;
    externalLink?: string;
}

const PersonalProjectCard = ({
    projectTitle,
    projectDescription,
    techList,
    githubLink,
    internalLink,
    externalLink,
}: PersonalProjectCardProps): ReactElement => {
    const navigate = useNavigate();

    const clickHandler = () => {
        if (!internalLink) return;
        navigate(`${internalLink}`, { replace: true });
        window.scrollTo(0, 0);
    };

    return (
        <PersonalProjectContainer onClick={clickHandler}>
            <div>
                <IconGroup>
                    <IconFolder />

                    <IconSubGroup>
                        {githubLink && (
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <IconGithub />
                            </a>
                        )}
                        {externalLink && (
                            <a href={externalLink} target="_blank" rel="noopener noreferrer">
                                <IconExternalLink />
                            </a>
                        )}
                    </IconSubGroup>
                </IconGroup>
                <ContentWrapper onClick={clickHandler}>
                    <h4>{projectTitle}</h4>
                    <p>{projectDescription}</p>
                </ContentWrapper>
            </div>
            <TechnologyList techList={techList} />
        </PersonalProjectContainer>
    );
};

export default PersonalProjectCard;
