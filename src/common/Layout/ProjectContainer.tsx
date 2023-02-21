import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    padding: 0 150px;
    margin: 150px 0;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    gap: 50px;

    @media only screen and (max-width: 992px) {
        padding: 0 100px;
    }

    @media only screen and (max-width: 768px) {
        padding: 0 50px;
    }

    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
`;

interface StyledProjectContainerProps {
    children: ReactNode;
}

const StyledProjectContainer = ({ children }: StyledProjectContainerProps): ReactElement => {
    return <StyledContainer>{children}</StyledContainer>;
};

export default StyledProjectContainer;
