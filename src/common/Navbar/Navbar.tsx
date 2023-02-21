import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';
import { scrollToSection } from '../index';
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
    z-index: 20;
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

    & a.active {
        color: var(--color-secondary-highlight);
    }
`;

const Navbar = (): ReactElement => {
    const [activeSection, setActiveSection] = useState('');

    const handleLinkClick = (sectionName: string) => {
        scrollToSection(sectionName);
        setActiveSection(sectionName);
    };

    return (
        <NavbarContainer>
            <LogoWrapper>
                <img src={Logo} alt="logo" />
            </LogoWrapper>
            <div>
                <NavbarList>
                    <NavbarItem onClick={() => handleLinkClick('about')}>
                        <a href="/#about" className={activeSection === 'about' ? 'active' : ''}>
                            About
                        </a>
                    </NavbarItem>
                    <NavbarItem onClick={() => handleLinkClick('skills')}>
                        <a href="/#skills" className={activeSection === 'skills' ? 'active' : ''}>
                            Skills
                        </a>
                    </NavbarItem>
                    <NavbarItem onClick={() => handleLinkClick('commercial-products')}>
                        <a
                            href="/#commercial-products"
                            className={activeSection === 'commercial-products' ? 'active' : ''}
                        >
                            Commercial products
                        </a>
                    </NavbarItem>
                    <NavbarItem onClick={() => handleLinkClick('personal-projects')}>
                        <a href="/#personal-projects" className={activeSection === 'personal-projects' ? 'active' : ''}>
                            Personal projects
                        </a>
                    </NavbarItem>
                    <NavbarItem onClick={() => handleLinkClick('contact')}>
                        <a href="/#contact" className={activeSection === 'contact' ? 'active' : ''}>
                            Contact
                        </a>
                    </NavbarItem>
                </NavbarList>
                <Sidebar />
            </div>
        </NavbarContainer>
    );
};

export default Navbar;
