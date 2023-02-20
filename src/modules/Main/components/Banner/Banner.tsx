import { ReactElement } from 'react';
import styled from 'styled-components';
import BannerImage from '../../../../assets/images/banner-image.png';
import { Button, FeaturedParagraph, TextHighlight } from '../../../../common/index';
import Description from './Description';
import PrimaryHeading from './PrimaryHeading';

const Container = styled.section`
    padding: 150px;
    position: relative;

    @media only screen and (max-width: 992px) {
        padding: 150px 100px;
    }

    @media only screen and (max-width: 768px) {
        padding: 150px 50px;
    }
`;

const ImageWrpapper = styled.div`
    position: absolute;
    right: 13%;
    top: 29%;
    height: 270px;
    width: 270px;

    & img {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
    }

    @media only screen and (max-width: 1170px) {
        display: none;
    }
`;

const ImageOverlay = styled.div`
    position: relative;
    top: 0;
    left: 0;
    z-index: 25;
    opacity: 60%;
    background: var(--color-background-default);
    height: 110%;
    width: 110%;
`;

const ButtonContainer = styled.div`
    margin-top: 40px;
`;

const Banner = (): ReactElement => {
    return (
        <Container>
            <div>
                <FeaturedParagraph>My name is</FeaturedParagraph>
                <PrimaryHeading message="Anna Ossowska." />
                <Description>
                    I am a <TextHighlight> Front-end Developer and Graphic Designer</TextHighlight> with five years of
                    experience in the
                    <TextHighlight> IT and management consulting</TextHighlight> sector, passionate about programming
                    and creating scalable products with great user experiences.
                </Description>
                <ButtonContainer>
                    <Button message="Check out my projects" large={true} path="commercial-products" isScrolling />
                </ButtonContainer>
            </div>
            <ImageWrpapper>
                <ImageOverlay />
                <img src={BannerImage} alt="bannerImage" />
            </ImageWrpapper>
        </Container>
    );
};

export default Banner;
