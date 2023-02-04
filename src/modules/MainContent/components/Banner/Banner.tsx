import { ReactElement } from 'react';
import styled from 'styled-components';
import { Button, FeaturedParagraph, TextHighlight } from '../../../../common/index';
import BigHeading from './BigHeading';
import Description from './Description';

const Container = styled.section`
    height: 100vh;
    padding: 100px 150px 0;
`;

const ButtonContainer = styled.div`
    margin-top: 40px;
`;

const Banner = (): ReactElement => {
    return (
        <Container>
            <FeaturedParagraph>My name is</FeaturedParagraph>
            <BigHeading message="Anna Ossowska." />
            <Description>
                I am a <TextHighlight> Front-end Developer and Graphic Designer</TextHighlight> with five years of
                experience in the
                <TextHighlight> IT and management consulting</TextHighlight> sector, passionate about programming and
                creating scalable products with great user experiences.
            </Description>
            <ButtonContainer>
                <Button message="Check out my projects" />
            </ButtonContainer>
        </Container>
    );
};

export default Banner;
