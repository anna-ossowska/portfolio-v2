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

    & a {
        font-family: var(--font-family-secondary);
        transition: color 0.2s;

        &:hover {
            color: var(--color-secondary-highlight);
        }
    }
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

const StyledParagraph = styled.p`
    font-size: 15px;

    @media only screen and (max-width: 600px) {
        font-size: 13px !important;
    }
`;

const Footer = (): ReactElement => {
    return (
        <FooterContainer>
            <Divider />
            <IconContainer>
                <IconWrapper>
                    <a href="https://github.com/anna-ossowska" target="_blank" rel="noopener noreferrer">
                        <IconGithub />
                    </a>
                </IconWrapper>
                <IconWrapper>
                    <a
                        href="https://www.linkedin.com/in/anna-ossowska-053485130/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconLinkedIn />
                    </a>
                </IconWrapper>
                <IconWrapper>
                    <a href="mailto:ossowska.anna1@gmail.com">
                        <IconMail />
                    </a>
                </IconWrapper>
            </IconContainer>
            <TextWrapper>
                <StyledParagraph>© Designed & built by Anna Ossowska</StyledParagraph>
            </TextWrapper>
        </FooterContainer>
    );
};

export default Footer;
