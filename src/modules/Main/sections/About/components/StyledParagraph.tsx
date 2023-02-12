import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    /* text-align: justify; */
    margin: 0 0 15px;
    width: 90%;
    font-size: 18px;

    @media only screen and (max-width: 992px) {
        width: 100%;
    }
`;

interface StyledParagraphProps {
    children: ReactNode;
}

const StyledParagraph = ({ children }: StyledParagraphProps): ReactElement => {
    return <Paragraph>{children}</Paragraph>;
};

export default StyledParagraph;
