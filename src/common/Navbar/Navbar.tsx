import { ReactElement } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--navbar-height);
    padding: 0 50px;
`;

const NavbarList = styled.ol`
    list-style-type: decimal-leading-zero;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 80px;
    color: var(--color-secondary-highlight);
    font-family: var(--font-family-secondary);

    @media only screen and (max-width: 992px) {
        gap: 60px;
        font-size: 14px;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const NavbarItem = styled.li`
    & :hover {
        color: var(--color-secondary-highlight);
    }

    & a {
        font-family: var(--font-family-secondary);
        margin-left: -5px;
        transition: color 0.2s;
    }
`;

const Navbar = (): ReactElement => {
    return (
        <NavbarContainer>
            <div>logo</div>
            <NavbarList>
                <NavbarItem>
                    <a href="/#about">About</a>
                </NavbarItem>
                <NavbarItem>
                    <a href="/#skills">Skills</a>
                </NavbarItem>
                <NavbarItem>
                    <a href="/#commercial-products">Commercial products</a>
                </NavbarItem>
                <NavbarItem>
                    <a href="/#coding-projects">Coding projects</a>
                </NavbarItem>
            </NavbarList>
        </NavbarContainer>
    );
};

export default Navbar;
