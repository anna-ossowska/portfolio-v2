import { ReactElement } from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
    large: boolean;
}

const StyledButton = styled.button`
    background-color: transparent;
    color: var(--color-text-highlight);
    border: 1px solid var(--color-text-highlight);
    border-radius: var(--border-radius);
    padding: ${({ large }: StyledButtonProps) => (large ? '1.1rem 1.75rem' : '0.75rem 1rem')};
    font-size: 14px;
    font-family: var(--font-family-secondary);
    text-decoration: none;
    cursor: pointer;
    transition: background 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
        background: var(--color-secondary-highlight-hover);
    }

    @media only screen and (max-width: 600px) {
        font-size: 13px;
    }
`;

interface ButtonProps {
    message: string;
    large: boolean;
}

const Button = ({ message, large }: ButtonProps): ReactElement => {
    return <StyledButton large={large}>{message}</StyledButton>;
};

export default Button;
