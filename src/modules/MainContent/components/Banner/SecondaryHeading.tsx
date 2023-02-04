import { ReactElement } from 'react';
import styled from 'styled-components';

interface SecondaryHeadingProps {
    message: string;
}

const Heading = styled.h2`
    font-size: 65px;
    color: var(--color-text-main);
`;

const SecondaryHeading = ({ message }: SecondaryHeadingProps): ReactElement => {
    return <Heading>{message}</Heading>;
};

export default SecondaryHeading;
