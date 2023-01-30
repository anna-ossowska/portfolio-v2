import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
    margin: 0px auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;
`;

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
    return <MainContainer>{children}</MainContainer>;
};

export default Layout;
