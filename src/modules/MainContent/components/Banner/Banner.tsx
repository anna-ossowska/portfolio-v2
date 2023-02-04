import { ReactElement } from 'react';
import styled from 'styled-components';
import { FeaturedParagraph, TextHighlight } from '../../../../common/index';
import BigHeading from './BigHeading';
import Description from './Description';

const Container = styled.section`
    padding: 50px 150px 0;
`;

const Banner = (): ReactElement => {
    return (
        <Container>
            <FeaturedParagraph>My name is</FeaturedParagraph>
            <BigHeading message="Anna Ossowska." />
            <Description>
                I am a <TextHighlight>Front-end Developer & Graphic Designer</TextHighlight> with five years of
                experience in the <TextHighlight>IT and management consulting</TextHighlight> sector, passionate about
                programming and creating scalable products with great user experiences.
            </Description>
        </Container>
    );
};

export default Banner;
