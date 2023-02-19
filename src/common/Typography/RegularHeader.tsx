import { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const Header = styled.h3`
    background-color: var(--color-background-default);
    color: var(--color-text-light-2);
    font-size: 30px;
    letter-spacing: 0.06rem;
    text-transform: capitalize;
    margin: 10px 0 35px;

    @media only screen and (max-width: 992px) {
        font-size: 28px;
    }

    @media only screen and (max-width: 600px) {
        font-size: 22px;
    }
`;

const Divider = styled.div`
    height: 0.5px;
    background-color: var(--color-divider);
    width: 350px;
    margin-top: -20px;
    margin-left: 15px;

    @media only screen and (max-width: 992px) {
        width: 250px;
    }

    @media only screen and (max-width: 768px) {
        width: 200px;
    }

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

interface RegularHeaderProps {
    title: string;
}

const RegularHeader = ({ title }: RegularHeaderProps): ReactElement => {
    return (
        <Container>
            <Header>{title}</Header>
            <Divider />
        </Container>
    );
};

export default RegularHeader;
