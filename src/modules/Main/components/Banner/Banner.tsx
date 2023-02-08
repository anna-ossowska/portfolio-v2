import { ReactElement } from 'react';
import styled from 'styled-components';
import { Button, FeaturedParagraph, TextHighlight } from '../../../../common/index';
import Description from './Description';
import PrimaryHeading from './PrimaryHeading';

const Container = styled.section`
    padding: 150px 150px;

    @media only screen and (max-width: 992px) {
        padding: 150px 100px;
    }

    @media only screen and (max-width: 768px) {
        padding: 150px 50px;
    }
`;

const ButtonContainer = styled.div`
    margin-top: 40px;
`;

const Banner = (): ReactElement => {
    return (
        <Container>
            <FeaturedParagraph>My name is</FeaturedParagraph>
            <PrimaryHeading message="Anna Ossowska." />
            <Description>
                I am a <TextHighlight> Front-end Developer and Graphic Designer</TextHighlight> with five years of
                experience in the
                <TextHighlight> IT and management consulting</TextHighlight> sector, passionate about programming and
                creating scalable products with great user experiences.
            </Description>
            <ButtonContainer>
                <Button message="Check out my projects" large={true} />
            </ButtonContainer>
        </Container>
    );
};

export default Banner;
