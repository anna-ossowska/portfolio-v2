import { ReactElement } from 'react';
import styled from 'styled-components';

interface NumberedHeaderProps {
    headerNumber: string;
    title: string;
}

const StyledHeader = styled.h3`
    background-color: var(--color-background-default);
    color: var(--color-text-light-2);
    font-size: 30px;
    letter-spacing: 0.06rem;
    text-transform: capitalize;
    margin: 10px 0 30px;

    @media only screen and (max-width: 600px) {
        font-size: 25px;
    }
`;

const Divider = styled.div`
    height: 0.5px;
    background-color: var(--color-divider);
    width: 350px;
    margin-top: -15px;
    margin-left: 15px;

    @media only screen and (max-width: 768px) {
        width: 200px;
    }

    @media only screen and (max-width: 600px) {
        width: 100px;
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <StyledHeader>
                <HighlightedNumber>{headerNumber}.</HighlightedNumber> {title}
            </StyledHeader>
            <Divider />
        </div>
    );
};

export default NumberedHeader;
