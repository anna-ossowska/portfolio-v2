import { ReactElement } from 'react';
import styled from 'styled-components';
import { IconExternalLink, IconFolder, IconGithub } from '../../../../assets/icons/index';
import { NumberedHeader, StyledSection } from '../../components/index';

const CodingProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    position: relative;
`;

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

const CodingProjectTechnologyList = styled.ul`
    display: flex;
    gap: 18px;
    list-style-type: none;
    font-family: var(--font-family-secondary);
    color: var(--color-text-light-1);

    @media only screen and (max-width: 992px) {
        margin-bottom: 15px;
    }

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

const CodingProjectsSectionSection = (): ReactElement => {
    return (
        <StyledSection>
            <NumberedHeader headerNumber="04" title="Coding Projects" />
            <div>
                <CodingProjectsWrapper>
                    <CodingProjectContainer>
                        <div>
                            <IconGroup>
                                <a href="https://github.com/anna-ossowska" target="_blank" rel="noopener noreferrer">
                                    <IconFolder />
                                </a>
                                <IconSubGroup>
                                    <a
                                        href="https://github.com/anna-ossowska"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconGithub />
                                    </a>
                                    <a
                                        href="https://github.com/anna-ossowska"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconExternalLink />
                                    </a>
                                </IconSubGroup>
                            </IconGroup>
                            <h4>Foodly</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis maiores
                                impedit, perferendis eveniet sequi similique dolorem nobis possimus aperiam.
                            </p>
                        </div>
                        <CodingProjectTechnologyList>
                            <li>React</li>
                            <li>Redux Toolkit</li>
                            <li>Firebase</li>
                        </CodingProjectTechnologyList>
                    </CodingProjectContainer>

                    <CodingProjectContainer>
                        <div>
                            <IconGroup>
                                <a href="https://github.com/anna-ossowska" target="_blank" rel="noopener noreferrer">
                                    <IconFolder />
                                </a>
                                <IconSubGroup>
                                    <a
                                        href="https://github.com/anna-ossowska"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconGithub />
                                    </a>
                                    <a
                                        href="https://github.com/anna-ossowska"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconExternalLink />
                                    </a>
                                </IconSubGroup>
                            </IconGroup>
                            <h4>ScentShop</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis maiores
                                impedit, perferendis eveniet sequi similique dolorem nobis possimus aperiam quidem cum
                                consequatur vero laboriosam molestias debitis itaque hic ullam amet ex, doloremque
                                beatae sed.
                            </p>
                        </div>
                        <CodingProjectTechnologyList>
                            <li>C#</li>
                            <li>ASP.NET</li>
                            <li>Entity Framework</li>
                        </CodingProjectTechnologyList>
                    </CodingProjectContainer>

                    <CodingProjectContainer>
                        <div>
                            <IconGroup>
                                <a href="https://github.com/anna-ossowska" target="_blank" rel="noopener noreferrer">
                                    <IconFolder />
                                </a>
                                <IconSubGroup>
                                    <a
                                        href="https://github.com/anna-ossowska"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconGithub />
                                    </a>
                                    <a
                                        href="https://github.com/anna-ossowska"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconExternalLink />
                                    </a>
                                </IconSubGroup>
                            </IconGroup>
                            <h4>Outdoor</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis maiores
                                impedit, perferendis eveniet sequi similique dolorem nobis possimus aperiam quidem cum
                                consequatur vero laboriosam molestias debitis itaque hic ullam amet ex, doloremque
                                beatae sed.
                            </p>
                        </div>
                        <CodingProjectTechnologyList>
                            <li>JavaScript</li>
                            <li>LeafletJS</li>
                            <li>Sass</li>
                        </CodingProjectTechnologyList>
                    </CodingProjectContainer>

                    <CodingProjectContainer>
                        <div>
                            <IconGroup>
                                <a href="https://github.com/anna-ossowska" target="_blank" rel="noopener noreferrer">
                                    <IconFolder />
                                </a>
                                <IconSubGroup>
                                    <a
                                        href="https://github.com/anna-ossowska"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconGithub />
                                    </a>
                                    <a
                                        href="https://github.com/anna-ossowska"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconExternalLink />
                                    </a>
                                </IconSubGroup>
                            </IconGroup>
                            <h4>Rest Countries</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis maiores
                                impedit, perferendis eveniet sequi similique dolorem nobis possimus aperiam quidem cum
                                consequatur vero laboriosam molestias debitis itaque hic ullam amet ex, doloremque
                                beatae sed.
                            </p>
                        </div>
                        <CodingProjectTechnologyList>
                            <li>React</li>
                            <li>JavaScript</li>
                        </CodingProjectTechnologyList>
                    </CodingProjectContainer>

                    <CodingProjectContainer>
                        <div>
                            <IconGroup>
                                <a href="https://github.com/anna-ossowska" target="_blank" rel="noopener noreferrer">
                                    <IconFolder />
                                </a>
                                <IconSubGroup>
                                    <a
                                        href="https://github.com/anna-ossowska"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconGithub />
                                    </a>
                                    <a
                                        href="https://github.com/anna-ossowska"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconExternalLink />
                                    </a>
                                </IconSubGroup>
                            </IconGroup>
                            <h4>Advision</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis maiores
                                impedit, perferendis eveniet sequi similique dolorem nobis possimus aperiam quidem cum
                                consequatur vero laboriosam molestias debitis itaque hic ullam amet ex, doloremque
                                beatae sed.
                            </p>
                        </div>
                        <CodingProjectTechnologyList>
                            <li>JavaScript</li>
                            <li>Sass</li>
                            <li>BEM</li>
                            <li>LightboxJS</li>
                        </CodingProjectTechnologyList>
                    </CodingProjectContainer>

                    <CodingProjectContainer>
                        <div>
                            <IconGroup>
                                <a href="https://github.com/anna-ossowska" target="_blank" rel="noopener noreferrer">
                                    <IconFolder />
                                </a>
                                <IconSubGroup>
                                    <a
                                        href="https://github.com/anna-ossowska"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconGithub />
                                    </a>
                                    <a
                                        href="https://github.com/anna-ossowska"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconExternalLink />
                                    </a>
                                </IconSubGroup>
                            </IconGroup>
                            <h4>BuddyLingua</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis maiores
                                impedit, perferendis eveniet sequi similique dolorem nobis possimus aperiam quidem cum
                                consequatur vero laboriosam molestias debitis itaque hic ullam amet ex, doloremque
                                beatae sed.
                            </p>
                        </div>
                        <CodingProjectTechnologyList>
                            <li>Ruby on Rails</li>
                            <li>Bootstrap</li>
                            <li>Heroku</li>
                        </CodingProjectTechnologyList>
                    </CodingProjectContainer>
                </CodingProjectsWrapper>
            </div>
        </StyledSection>
    );
};

export default CodingProjectsSectionSection;
