import { ReactElement } from 'react';
import styled from 'styled-components';
import { FeaturedParagraph, ScrollAdjustment, TextHighlight } from '../../../../common/index';
import { StyledSection } from '../../components/index';

const MainContainer = styled.div`
    position: relative;
`;

const StyledHeader = styled.h3`
    background-color: var(--color-background-default);
    color: var(--color-text-light-2);
    font-size: 50px;
    text-align: center;
    letter-spacing: 0.06rem;
    text-transform: capitalize;
    margin: 0 0 15px;

    @media only screen and (max-width: 600px) {
        font-size: 35px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledParagraph = styled.p`
    text-align: center;
    width: 500px;

    @media only screen and (max-width: 600px) {
        width: 340px;
    }
`;

const Contact = (): ReactElement => {
    return (
        <MainContainer>
            <ScrollAdjustment elementId="contact" />
            <StyledSection>
                <Wrapper>
                    <FeaturedParagraph>05. Contact</FeaturedParagraph>
                    <StyledHeader>Get In Touch</StyledHeader>
                    <StyledParagraph>
                        My inbox is always open. Whether you have a question or just would like to say hello, please
                        feel free to contact me at{' '}
                        <TextHighlight isNeutralColor={true}>ossowska.anna1@gmail.com</TextHighlight> or via my{' '}
                        <a
                            href="https://www.linkedin.com/in/anna-ossowska-053485130/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <TextHighlight isNeutralColor={true}>LinkedIn</TextHighlight>
                        </a>{' '}
                        profile.
                    </StyledParagraph>
                </Wrapper>
            </StyledSection>
        </MainContainer>
    );
};

export default Contact;
