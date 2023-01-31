/* eslint-disable import/no-relative-parent-imports */
import { ReactElement } from 'react';
import styled from 'styled-components';
import { IconGithub, IconLinkedIn, IconMail } from '../../assets/icons/index';

const FooterContainer = styled.footer`
    width: 85%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -20%);
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100%;
`;

const IconWrapper = styled.div`
    width: 20px;
`;

const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-regular);
    color: var(--color-text-light-1);
    font-size: 14px;
`;

const Divider = styled.div`
    border-top: 0.5px solid var(--color-text-light-1);
    margin: 20px 0;
`;

const Footer = (): ReactElement => {
    return (
        <FooterContainer>
            <Divider />
            <IconContainer>
                <IconWrapper>
                    <IconGithub />
                </IconWrapper>
                <IconWrapper>
                    <IconLinkedIn />
                </IconWrapper>
                <IconWrapper>
                    <IconMail />
                </IconWrapper>
            </IconContainer>
            <TextWrapper>
                <p>© Designed and built by Anna Ossowska</p>
            </TextWrapper>
        </FooterContainer>
    );
};

export default Footer;
