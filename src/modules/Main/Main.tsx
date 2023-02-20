import { ReactElement } from 'react';
import { Banner } from './components';
import {
    AboutSection,
    SkillsSection,
    CommercialProductsSection,
    PersonalProjectsSection,
    ContactSection,
} from './sections/index';

const Main = (): ReactElement => {
    return (
        <div>
            <Banner />
            <AboutSection />
            <SkillsSection />
            <CommercialProductsSection />
            <PersonalProjectsSection />
            <ContactSection />
        </div>
    );
};

export default Main;
