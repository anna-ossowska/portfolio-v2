import { ReactElement } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';
import Sidebar from '../Sidebar/Sidebar';

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--navbar-height);
    background: rgba(10, 25, 47, 0.95);
    padding: 0 50px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 4;
`;

const LogoWrapper = styled.div`
    & img {
        height: 27px;
    }
`;

const NavbarList = styled.ol`
    list-style-type: decimal-leading-zero;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    gap: 80px;
    color: var(--color-text-highlight);
    font-family: var(--font-family-secondary);

    @media only screen and (max-width: 992px) {
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
            <LogoWrapper>
                <img src={Logo} alt="logo" />
            </LogoWrapper>
            <div>
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
                        <a href="/#personal-projects">Personal projects</a>
                    </NavbarItem>
                    <NavbarItem>
                        <a href="/#contact">Contact</a>
                    </NavbarItem>
                </NavbarList>
                <Sidebar />
            </div>
        </NavbarContainer>
    );
};

export default Navbar;
