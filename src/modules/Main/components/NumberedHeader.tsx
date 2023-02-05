import { ReactElement } from 'react';
import styled from 'styled-components';

interface NumberedHeaderProps {
    headerNumber: string;
    title: string;
}

const StyledHeader = styled.h3`
    color: var(--color-text-light-2);
    letter-spacing: 0.06rem;
    text-transform: capitalize;
    position: relative;
    margin: 10px 0 30px;
    font-size: 30px;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 215px;
        width: 300px;
        height: 0.5px;
        background-color: var(--color-divider);
    }
`;

const HighlightedNumber = styled.span`
    color: var(--color-secondary-highlight);
    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-regular);
    font-size: 0.8em;
`;

const NumberedHeader = ({ headerNumber, title }: NumberedHeaderProps): ReactElement => {
    return (
        <StyledHeader>
            <HighlightedNumber>{headerNumber}.</HighlightedNumber> {title}
        </StyledHeader>
    );
};

export default NumberedHeader;
