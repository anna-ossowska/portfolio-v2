/* eslint-disable jsx-a11y/label-has-associated-control */
import { ReactElement, useState } from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
    height: 50px;
    width: 50px;
    display: none;

    @media only screen and (max-width: 992px) {
        display: block;
    }
`;

const NavigationButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    z-index: 1000;
    cursor: pointer;
    position: relative;
`;

interface NavigationIconProps {
    isOpen: boolean;
}

const NavigationIcon = styled.span`
    position: relative;

    &,
    &::before,
    &::after {
        width: 3rem;
        height: 2px;
        background-color: var(--color-secondary-highlight);
        display: inline-block;
        rotate: ${({ isOpen }: NavigationIconProps) => (isOpen ? '45deg' : '0')};
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        left: 0;
        transition: rotate 0.2s;
    }

    &::before {
        top: -1rem;
        top: ${({ isOpen }: NavigationIconProps) => (isOpen ? '0' : '-1rem')};
        rotate: ${({ isOpen }: NavigationIconProps) => (isOpen ? '90deg' : '0')};
    }

    &::after {
        top: 1rem;
        visibility: ${({ isOpen }: NavigationIconProps) => (isOpen ? 'visible' : 'none')};
        opacity: ${({ isOpen }: NavigationIconProps) => (isOpen ? '0' : '1')};
    }
`;

const NavigationContainer = styled.aside`
    background: var(--color-primary-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 0 50px 50px;
    width: min(75vw, 400px);
    height: 100vh;
    box-shadow: -10px 0px 30px -15px var(--color-shadow);
    z-index: 9;

    @media only screen and (max-width: 600px) {
        padding: 30px;
        width: min(90vw, 400px);
    }
`;

const NavigationList = styled.ol`
    list-style-type: decimal-leading-zero;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    gap: 80px;
    color: var(--color-text-highlight);
    font-family: var(--font-family-secondary);

    @media only screen and (max-width: 600px) {
        font-size: 18px;
    }
`;

const NavigationItem = styled.li`
    & :hover {
        color: var(--color-secondary-highlight);
    }

    & a {
        font-family: var(--font-family-secondary);
        color: var(--color-text-light-2);
        margin-left: -5px;
        transition: color 0.2s;
    }
`;

interface BlurredBackgroundProps {
    isOpen: boolean;
}

const BlurredBackground = styled.div`
    background: rgba(17, 34, 64, 0.1);
    visibility: ${({ isOpen }: BlurredBackgroundProps) => (isOpen ? 'visible' : 'hidden')};
    opacity: ${({ isOpen }: BlurredBackgroundProps) => (isOpen ? '1' : '0')};
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    bottom: 0;
    right: 0;
    cursor: pointer;
    z-index: 6;
    backdrop-filter: blur(5px);
    transition: opacity 0.1s linear, visibility 0.1s linear;
`;

const Sidebar = (): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    const handleBackgroundClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navigation>
                <NavigationButton onClick={handleButtonClick}>
                    <NavigationIcon isOpen={isOpen} />
                </NavigationButton>
                {isOpen && (
                    <NavigationContainer>
                        <nav>
                            <NavigationList>
                                <NavigationItem>
                                    <a href="/#about">About</a>
                                </NavigationItem>
                                <NavigationItem>
                                    <a href="/#skills">Skills</a>
                                </NavigationItem>
                                <NavigationItem>
                                    <a href="/#commercial-products">Commercial products</a>
                                </NavigationItem>
                                <NavigationItem>
                                    <a href="/#coding-projects">Coding projects</a>
                                </NavigationItem>
                                <NavigationItem>
                                    <a href="/#contact">Contact</a>
                                </NavigationItem>
                            </NavigationList>
                        </nav>
                    </NavigationContainer>
                )}
            </Navigation>
            <BlurredBackground isOpen={isOpen} onClick={handleBackgroundClick} />
        </div>
    );
};

export default Sidebar;
