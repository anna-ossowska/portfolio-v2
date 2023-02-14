import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface HighlightProps {
    isNeutralColor: boolean;
}

const Highlight = styled.span`
    color: ${({ isNeutralColor }: HighlightProps) =>
        isNeutralColor ? 'var(--color-text-light-2)' : 'var(--color-text-highlight)'};
`;

interface TextHighlightProps {
    children: ReactNode;
    isNeutralColor?: boolean;
}

const TextHighlight = ({ children, isNeutralColor = false }: TextHighlightProps): ReactElement => {
    return <Highlight isNeutralColor={isNeutralColor}>{children}</Highlight>;
};

export default TextHighlight;
