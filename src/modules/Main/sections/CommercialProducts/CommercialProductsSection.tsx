import { ReactElement } from 'react';
import { NumberedHeader } from '../../../../common/index';
import {
    fatlandTechList1,
    lifeAtWorkTechList1,
    solintegraTechList1,
    udemyCourseTechList1,
} from '../../../../config/data';
import { StyledSection } from '../../components/index';
import { ProjectCard } from './components/index';

const CommercialProductsSection = (): ReactElement => {
    return (
        <StyledSection>
            <NumberedHeader headerNumber="03" title="Commercial products" />
            <ProjectCard
                projectTitle="Solintegra Partner Portal"
                projectDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi voluptatum quas possimus cumque illo eligendi corporis suscipit dolorum porro quisquam explicabo quis natus ipsa ipsum dolores soluta error iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                contentLeft={false}
                techList={solintegraTechList1}
                githubLink="https://github.com/anna-ossowska"
                externalLink="https://github.com/anna-ossowska"
                imagePath="https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2459&q=80"
            />

            <ProjectCard
                projectTitle="Life@Work"
                projectDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi voluptatum quas possimus cumque illo eligendi corporis suscipit dolorum porro quisquam explicabo quis natus ipsa ipsum dolores soluta error iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                contentLeft={true}
                techList={lifeAtWorkTechList1}
                githubLink="https://github.com/anna-ossowska"
                externalLink="https://github.com/anna-ossowska"
                imagePath="https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2459&q=80"
            />

            <ProjectCard
                projectTitle="Mitt Fatland"
                projectDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi voluptatum quas possimus cumque illo eligendi corporis suscipit dolorum porro quisquam explicabo quis natus ipsa ipsum dolores soluta error iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                contentLeft={false}
                techList={fatlandTechList1}
                githubLink="https://github.com/anna-ossowska"
                externalLink="https://github.com/anna-ossowska"
                imagePath="https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2459&q=80"
            />

            <ProjectCard
                projectTitle="Udemy Course"
                projectDescription="I contributed to the global learning community by designing and publishing an online course on the Udemy platform about creating PowerPoint presentations and data visualizations. The course has been purchased by more than 600 students so far."
                contentLeft={true}
                techList={udemyCourseTechList1}
                externalLink="https://www.udemy.com/course/use-powerpoint-like-a-professional-designer/"
                imagePath="https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2459&q=80"
            />
        </StyledSection>
    );
};

export default CommercialProductsSection;
