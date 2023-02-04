import { ReactElement } from 'react';
import styled from 'styled-components';
import { Banner, NumberedHeader } from './components';

const StyledSection = styled.section`
    padding: 0 150px;
`;

const StyledParagraph = styled.p`
    width: 50%;
    text-align: justify;
    margin: 0 0 15px;
`;
const MainContent = (): ReactElement => {
    return (
        <div>
            <Banner />
            <StyledSection>
                <NumberedHeader headerNumber="01" title="About me" />
                <StyledParagraph>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus itaque exercitationem
                    explicabo numquam dolores iste ad laboriosam nobis ducimus voluptatem? Placeat magnam recusandae
                    inventore atque, distinctio quidem officiis, accusantium, nulla ullam facere fugiat. Nostrum
                    numquam, ullam sunt nihil corrupti vel inventore soluta dolores fugit aperiam minus repudiandae,
                    deserunt, voluptatibus hic.
                </StyledParagraph>

                <StyledParagraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cum itaque? Totam amet ipsa architecto
                    officiis ipsum magni sequi dicta quae aliquid illum? Magnam consequuntur eligendi quidem
                    necessitatibus asperiores similique porro non odit ut, qui iste minima ratione fugit voluptatibus,
                    neque nemo in quia inventore magni officiis, ullam id atque? Libero iusto consequatur voluptate
                    deserunt incidunt rerum dolor minus id temporibus qui perferendis, perspiciatis ratione.
                </StyledParagraph>
            </StyledSection>
        </div>
    );
};

export default MainContent;
