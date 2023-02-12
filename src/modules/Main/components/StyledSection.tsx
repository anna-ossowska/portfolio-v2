import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const Section = styled.section`
    padding: 0 150px;
    margin-bottom: 150px;

    @media only screen and (max-width: 992px) {
        padding: 0 100px;
    }

    @media only screen and (max-width: 768px) {
        padding: 0 50px;
    }
`;

interface StyledSectionProps {
    children: ReactNode;
}

const StyledSection = ({ children }: StyledSectionProps): ReactElement => {
    return <Section>{children}</Section>;
};

export default StyledSection;
