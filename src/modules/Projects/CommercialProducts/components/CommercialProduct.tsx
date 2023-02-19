import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { NumberedHeader } from '../../../../common/index';
import { ProjectContainer } from '../../components/index';
import { UserStory } from './index';

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

    & span.span-decorator {
        font-family: var(--font-family-secondary);
        color: var(--color-text-highlight);
        margin-right: 5px;
    }

    @media only screen and (max-width: 600px) {
        gap: 15px;
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
    }
`;

const UserStoriesContainer = styled.section`
    & p {
        width: 55%;
        padding: 20px;
        border-radius: var(--border-radius);
        background: var(--color-primary-dark);
        margin: 0 0 20px;
        box-shadow: var(--box-shadow) var(--color-shadow);

        @media only screen and (max-width: 992px) {
            width: 75%;
        }

        @media only screen and (max-width: 600px) {
            width: 100%;
        }
    }
`;

const ProjectTechnologyList = styled.section``;

const ProjectResponsibilities = styled.section``;

interface CommercialProductProps {
    projectTitle: string | ReactNode;
    industryList: string[];
    rolesList: string[];
    projectDescription: string;
    techList: string[];
    respList: string[];
    userStoriesList?: string[];
    userStoriesImages?: string[];
}

const CommercialProduct = ({
    projectTitle,
    industryList,
    rolesList,
    projectDescription,
    techList,
    respList,
    userStoriesList,
    userStoriesImages,
}: CommercialProductProps): ReactElement => {
    return (
        <ProjectContainer>
            <ProjectIntro>
                <ProjectTitleWrapper>
                    <h2>{projectTitle}</h2>
                </ProjectTitleWrapper>
                <ProjectMainInfoWrapper>
                    <div>
                        <span className="span-decorator">Industry:</span>
                        {industryList.map((el, index, arr) => {
                            return <span key={`industryList-${index}`}>{index < arr.length - 1 ? el + ', ' : el}</span>;
                        })}
                    </div>
                    <div>
                        <span className="span-decorator">Role:</span>
                        {rolesList.map((el, index, arr) => {
                            return <span key={`rolesList-${index}`}>{index < arr.length - 1 ? el + ', ' : el}</span>;
                        })}
                    </div>
                </ProjectMainInfoWrapper>
                <div>{projectDescription}</div>
            </ProjectIntro>

            <ProjectTechnologyList>
                <NumberedHeader headerNumber="01" title="Technologies" />
                <StyledList>
                    {techList.map((el, index) => {
                        return <li key={`techList-${index}`}>{el}</li>;
                    })}
                </StyledList>
            </ProjectTechnologyList>

            <ProjectResponsibilities>
                <NumberedHeader headerNumber="02" title="Responsibilities" />
                <StyledList>
                    {respList.map((el, index) => {
                        return <li key={`respList-${index}`}>{el}</li>;
                    })}
                </StyledList>
            </ProjectResponsibilities>

            {userStoriesList && userStoriesImages && (
                <UserStoriesContainer>
                    <NumberedHeader headerNumber="03" title="Selected User Stories" />
                    {userStoriesList.map((el, index) => {
                        return (
                            <UserStory
                                key={`userStory-${index}`}
                                userStory={el}
                                userStoryImage={userStoriesImages[index]}
                            />
                        );
                    })}
                </UserStoriesContainer>
            )}
        </ProjectContainer>
    );
};

export default CommercialProduct;
