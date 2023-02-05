import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
    margin: 0px auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 0 150px 200px;
    position: relative;

    @media only screen and (max-width: 1500px) {
        padding: 0 20px 200px;
    }

    @media only screen and (max-width: 1200px) {
        padding: 0 0 200px;
    }
`;

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
    return <MainContainer>{children}</MainContainer>;
};

export default Layout;
