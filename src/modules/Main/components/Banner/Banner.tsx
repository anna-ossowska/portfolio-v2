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
    z-index: 10;
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
                    With five years of experience in the IT and management consulting sectors, I excel as a{' '}
                    <TextHighlight>Front-end Developer</TextHighlight> and{' '}
                    <TextHighlight>Graphic Designer</TextHighlight>, driven by a passion for developing scalable
                    products that prioritize user experience. I bring a unique blend of technical and creative expertise
                    to projects, leveraging cutting-edge technologies and design principles.
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
