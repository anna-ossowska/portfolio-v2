import { ReactElement } from 'react';
import { Banner } from './components';
import { AboutSection, SkillsSection, CommercialProductsSection, CodingProjectsSection } from './sections/index';

const Main = (): ReactElement => {
    return (
        <div>
            <Banner />
            <AboutSection />
            <SkillsSection />
            <CommercialProductsSection />
            <CodingProjectsSection />
        </div>
    );
};

export default Main;
