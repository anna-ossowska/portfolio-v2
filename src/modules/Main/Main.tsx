import { ReactElement } from 'react';
import { Banner } from './components';
import {
    AboutSection,
    SkillsSection,
    CommercialProductsSection,
    CodingProjectsSection,
    ContactSection,
} from './sections/index';

const Main = (): ReactElement => {
    return (
        <div>
            <Banner />
            <AboutSection />
            <SkillsSection />
            <CommercialProductsSection />
            <CodingProjectsSection />
            <ContactSection />
        </div>
    );
};

export default Main;
