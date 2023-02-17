import { ReactElement } from 'react';
import styled from 'styled-components';
import { NumberedHeader } from '../../Main/components';
import { ProjectContainer } from '../components/index';

const ProjectTitleWrapper = styled.h2`
    & h2 {
        color: var(--color-text-light-2);
        font-size: 66px;
        margin-bottom: 5px;
        letter-spacing: 0.06rem;
    }
    /* 
    & div {
        border-top: 1px solid var(--color-divider);
        margin: 10px 0;
    } */
`;

const ProjectIntro = styled.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const ProjectMainInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--color-text-light-2);

    & span {
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
        font-size: 17px;

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

const ProjectTechnologyList = styled.section``;

const ProjectResponsibilities = styled.section``;
const UserStories = styled.section`
    & p {
        width: 55%;
        padding: 20px;
        border-radius: var(--border-radius);
        background: var(--color-primary-dark);
        margin: 0 0 30px;
        box-shadow: var(--box-shadow) var(--color-shadow);
    }
`;

const UserStoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    align-items: flex-start;

    & p {
        color: var(--color-text-light-1);
    }

    &:nth-child(2n + 1) {
        align-items: flex-end;
        text-align: right;
    }
`;

const CommercialProducts = (): ReactElement => {
    return (
        <ProjectContainer>
            <ProjectIntro>
                <ProjectTitleWrapper>
                    <h2>
                        Solintegra
                        <br />
                        Partner Portal
                    </h2>
                    <div />
                </ProjectTitleWrapper>
                <ProjectMainInfoWrapper>
                    <div>
                        <span>Industry:</span> Renewable Energy&nbsp;&nbsp;|&nbsp;&nbsp;Construction
                    </div>
                    <div>
                        <span>Role:</span> Lead Front-end Developer&nbsp;&nbsp;|&nbsp;&nbsp;Consultant
                    </div>
                </ProjectMainInfoWrapper>
                <div>
                    Solintegra is a back-office solution where Partners are empowered to take part in the green shift by
                    getting the know-how and possibility to easily estimate prices and number of solar panels fitting a
                    roof. In addition, the portal helps with the process of advising customers independently on the use,
                    planning and pricing for building integrated solar panel solutions (BIPV).
                </div>
            </ProjectIntro>

            <ProjectTechnologyList>
                <NumberedHeader headerNumber="01" title="Technologies" />
                <StyledList>
                    <li>AWS Amplify</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Redux Toolkit</li>
                    <li>React Query</li>
                    <li>React Hook Form</li>
                    <li>Yup</li>
                </StyledList>
            </ProjectTechnologyList>

            <ProjectResponsibilities>
                <NumberedHeader headerNumber="02" title="Responsibilities" />
                <StyledList>
                    <li>implementing the front-end architecture, authentication, and state management</li>
                    <li>integrating the application with AWS Amplify</li>
                    <li>creating the responsive user interface based on Figma prototypes</li>
                    <li>implementing a Solar Roof Calculator</li>
                    <li>writing the technical documentation</li>
                </StyledList>
            </ProjectResponsibilities>

            <UserStories>
                <NumberedHeader headerNumber="03" title="Selected User Stories" />
                <UserStoryWrapper>
                    <p>
                        As admin, I want to see an overview of all inquiries in the system so that I can track their
                        status and see if a customer needs attention
                    </p>
                    <img
                        src={
                            'https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2459&q=80'
                        }
                        alt="projectImage"
                    />
                </UserStoryWrapper>
                <UserStoryWrapper>
                    <p>
                        As admin, I want to be able to administrate individual inquiries to make sure changes are
                        documented where everybody involved can be informed
                    </p>
                    <img
                        src={
                            'https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2459&q=80'
                        }
                        alt="projectImage"
                    />
                </UserStoryWrapper>
            </UserStories>
        </ProjectContainer>
    );
};

export default CommercialProducts;
