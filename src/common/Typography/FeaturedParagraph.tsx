import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: 18px;
    color: var(--color-secondary-highlight);
    font-family: var(--font-family-secondary);
    margin: 0 0 20px;
`;

interface FeaturedParapgraphProps {
    children: ReactNode;
}

const FeaturedParapgraph = ({ children }: FeaturedParapgraphProps): ReactElement => {
    return <Paragraph>{children}</Paragraph>;
};

export default FeaturedParapgraph;
