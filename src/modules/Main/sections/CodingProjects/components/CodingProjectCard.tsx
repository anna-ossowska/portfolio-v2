import { ReactElement } from 'react';
import styled from 'styled-components';
import { IconExternalLink, IconFolder, IconGithub } from '../../../../../assets/icons/index';
import { TechnologyList } from './index';

const CodingProjectContainer = styled.div`
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
    gap: 15px;
`;

interface CodingProjectCardProps {
    projectTitle: string;
    projectDescription: string;
    techList: string[];
    projectDetailsPath: string;
    githubLink: string;
    externalLink: string;
}

const CodingProjectCard = ({
    projectTitle,
    projectDescription,
    techList,
    projectDetailsPath,
    githubLink,
    externalLink,
}: CodingProjectCardProps): ReactElement => {
    return (
        <CodingProjectContainer>
            <div>
                <IconGroup>
                    <a href={projectDetailsPath} target="_blank" rel="noopener noreferrer">
                        <IconFolder />
                    </a>
                    <IconSubGroup>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <IconGithub />
                        </a>
                        <a href={externalLink} target="_blank" rel="noopener noreferrer">
                            <IconExternalLink />
                        </a>
                    </IconSubGroup>
                </IconGroup>
                <h4>{projectTitle}</h4>
                <p>{projectDescription}</p>
            </div>
            <TechnologyList techList={techList} />
        </CodingProjectContainer>
    );
};

export default CodingProjectCard;
