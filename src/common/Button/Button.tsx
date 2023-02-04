import { ReactElement } from 'react';
import styled from 'styled-components';

interface ButtonProps {
    message: string;
}

const StyledButton = styled.button`
    background-color: transparent;
    color: var(--color-text-highlight);
    border: 1px solid var(--color-text-highlight);
    border-radius: var(--border-radius);
    padding: 1.1rem 1.75rem;
    font-size: 14px;
    font-family: var(--font-family-secondary);
    text-decoration: none;
    cursor: pointer;
    transition: background 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
        background: var(--color-secondary-highlight-hover);
    }
`;

const Button = ({ message }: ButtonProps): ReactElement => {
    return <StyledButton>{message}</StyledButton>;
};

export default Button;