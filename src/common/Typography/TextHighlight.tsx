import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface TextHighlightProps {
    children: ReactNode;
}

const Highlight = styled.span`
    color: var(--color-text-highlight);
`;

const TextHighlight = ({ children }: TextHighlightProps): ReactElement => {
    return <Highlight>{children}</Highlight>;
};

export default TextHighlight;
