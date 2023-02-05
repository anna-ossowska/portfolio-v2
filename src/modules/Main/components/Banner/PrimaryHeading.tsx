import { ReactElement } from 'react';
import styled from 'styled-components';

interface PrimaryHeadingProps {
    message: string;
}

const Heading = styled.h1`
    font-size: 75px;
    color: var(--color-text-light-2);

    @media only screen and (max-width: 992px) {
        font-size: 65px;
    }

    @media only screen and (max-width: 600px) {
        font-size: 50px;
    }
`;

const PrimaryHeading = ({ message }: PrimaryHeadingProps): ReactElement => {
    return <Heading>{message}</Heading>;
};

export default PrimaryHeading;
