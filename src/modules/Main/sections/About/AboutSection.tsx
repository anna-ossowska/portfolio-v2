import { ReactElement } from 'react';
import styled from 'styled-components';
import Profile from '../../../../assets/images/profile.png';
import { NumberedHeader, StyledSection } from '../../components/index';

const StyledParagraph = styled.p`
    /* text-align: justify; */
    margin: 0 0 15px;
    width: 90%;
    font-size: 18px;

    @media only screen and (max-width: 992px) {
        width: 100%;
    }
`;

const AboutSectionContainer = styled.div`
    display: flex;

    @media only screen and (max-width: 992px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ImageContainer = styled.div`
    margin-top: 8px;
    position: relative;

    @media only screen and (max-width: 992px) {
        margin-top: 30px;
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 22px;
        left: 22px;
        width: 300px;
        height: 300px;
        border: solid var(--color-secondary-highlight) 1px;
        border-radius: var(--border-radius);
        z-index: -1;
    }
`;

const StyledImage = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: var(--border-radius);
`;

const AboutSection = (): ReactElement => {
    return (
        <StyledSection>
            <NumberedHeader headerNumber="01" title="About me" />
            <AboutSectionContainer>
                <div>
                    <StyledParagraph>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus itaque exercitationem
                        explicabo numquam dolores iste ad laboriosam nobis ducimus voluptatem? Placeat magnam recusandae
                        inventore atque, distinctio quidem officiis, accusantium, nulla ullam facere fugiat. Nostrum
                        numquam, ullam sunt nihil corrupti vel inventore soluta dolores fugit aperiam minus repudiandae,
                        deserunt, voluptatibus hic.
                    </StyledParagraph>

                    <StyledParagraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cum itaque? Totam amet ipsa
                        architecto officiis ipsum magni sequi dicta quae aliquid illum? Magnam consequuntur eligendi
                        quidem necessitatibus asperiores similique porro non odit ut, qui iste minima ratione fugit
                        voluptatibus, neque nemo in quia inventore magni officiis, ullam id atque? Libero iusto
                        consequatur voluptate deserunt incidunt rerum dolor minus id temporibus qui perferendis,
                        perspiciatis ratione.
                    </StyledParagraph>
                </div>
                <ImageContainer>
                    <StyledImage src={Profile} alt="profile" />
                </ImageContainer>
            </AboutSectionContainer>
        </StyledSection>
    );
};

export default AboutSection;
