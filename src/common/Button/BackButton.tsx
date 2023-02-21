import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconLeft } from '../../assets/icons';
import { ROOT } from '../../navigation/constants';

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--color-text-highlight);
`;

const BackButton = (): ReactElement => {
    return (
        <StyledLink to={ROOT}>
            <IconLeft />
            <span>Go Back</span>
        </StyledLink>
    );
};

export default BackButton;
