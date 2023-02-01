import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
    margin: 0px auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 0 150px 200px;
    position: relative;

    @media only screen and (max-width: 992px) {
        padding: 200px 100px;
    }

    @media only screen and (max-width: 768px) {
        padding: 200px 80px;
    }

    @media only screen and (max-width: 600px) {
        padding: 200px 50px;
    }
`;

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
    return <MainContainer>{children}</MainContainer>;
};

export default Layout;
