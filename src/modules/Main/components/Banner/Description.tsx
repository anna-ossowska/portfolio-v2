import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface DescriptionProps {
    children: ReactNode;
}

const Container = styled.div`
    max-width: 540px;
    /* text-align: justify; */
`;

const Paragraph = styled.p`
    font-size: 18px;
    margin: 20px 0 0;
`;

const Description = ({ children }: DescriptionProps): ReactElement => {
    return (
        <Container>
            <Paragraph>{children}</Paragraph>
        </Container>
    );
};

export default Description;
