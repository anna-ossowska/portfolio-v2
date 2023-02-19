import Solintegra11 from '../assets/images/projects/solintegra/solintegra-1-1.jpg';
import Solintegra22 from '../assets/images/projects/solintegra/solintegra-2-2.jpg';
import Solintegra33 from '../assets/images/projects/solintegra/solintegra-3-3.jpg';
import Solintegra43 from '../assets/images/projects/solintegra/solintegra-4-3.jpg';
import Solintegra53 from '../assets/images/projects/solintegra/solintegra-5-3.jpg';
import Solintegra63 from '../assets/images/projects/solintegra/solintegra-6-3.jpg';
import Solintegra73 from '../assets/images/projects/solintegra/solintegra-7-3.jpg';
import Solintegra83 from '../assets/images/projects/solintegra/solintegra-8-3.jpg';

// SKILLS

export const frontEndSkills = [
    'React',
    'Styled Components',
    'TypeScript',
    'Bootstrap',
    'JavaScript (ES6)',
    'CSS',
    'Redux & Redux Toolkit',
    'HTML5',
    'Material UI',
    'Responsive Web Design',
    'Sass',
    'Web Accessibility',
];

export const otherSkills = ['AWS Amplify', 'Git', 'C#', 'Big 0'];

export const projectManagmentSkills = ['SCRUM', 'DevOps', 'GitHub', 'Monday', 'Confluence'];

export const graphicDesignSkills = [
    'Figma',
    'UI & UX',
    'Data Visualization',
    'Presentation Design',
    'Adobe Creative Cloud',
    'Tableau',
];

export const libraries = [
    'React Hook Form',
    'Yup',
    'Axios',
    'React Query',
    'React Route',
    'React Table',
    'React Draggable',
];

// COMMERCIAL PROJECTS

// 1. Solintegra

export const solintegraIndustryList = ['Renewable Energy', 'Construction'];

export const solintegraRolesList = ['Lead Front-end Developer', 'Consultant'];

export const solintegraTechList1 = ['AWS Aplify', 'React', 'TypeScript', 'Redux Toolkit', 'Material UI'];

export const solintegraTechList2 = [
    'AWS Amplify',
    'React',
    'TypeScript',
    'Redux Toolkit',
    'React Query',
    'React Hook Form',
    'Yup',
    'Material UI (MUI)',
    'Styled Components',
    'GitHub',
    'Monday',
    'Confluence',
];

export const solintegraRespList = [
    'Implementing the front-end architecture, authentication, and state management',
    'Integrating the application with AWS Amplify',
    'Creating the responsive user interface based on Figma prototypes',
    'Implementing a Solar Roof Calculator',
    'Writing the technical documentation',
    'Working with the Agile Scrum methodology',
];

export const solintegraUserStoriesList = [
    'As admin, I want to see an overview of all inquiries in the system so that I can track their status and see if a customer needs attention',
    'As admin, I want to be able to administrate individual inquiries to make sure changes are documented where everybody involved can be informed',
    'As a partner I want to share details about a lead with a sub-contractor so that they can give me prices on their work contribution',
];

export interface userStoriesImagesDto {
    imageGroup: number;
    path: string;
}

export const userStoriesImages: userStoriesImagesDto[] = [
    {
        imageGroup: 1,
        path: Solintegra11,
    },
    {
        imageGroup: 2,
        path: Solintegra22,
    },
    {
        imageGroup: 3,
        path: Solintegra33,
    },
    {
        imageGroup: 3,
        path: Solintegra43,
    },
    {
        imageGroup: 3,
        path: Solintegra53,
    },
    {
        imageGroup: 3,
        path: Solintegra63,
    },
    {
        imageGroup: 3,
        path: Solintegra73,
    },
    {
        imageGroup: 3,
        path: Solintegra83,
    },
];

// 2. Life@Work

export const lifeAtWorkIndustryList = ['Retail'];

export const lifeAtWorkRolesList = ['Front-end Developer'];

export const lifeAtWorkTechList1 = ['React', 'TypeScript', 'React Query', 'Styled Components', 'C#'];

export const lifeAtWorkTechList2 = [
    'React',
    'TypeScript',
    'C#',
    'Azure',
    'DevOps',
    'Styled Components',
    'React Query',
    'React Hook Form',
    'Yup',
];

export const lifeAtWorkRespList = [
    'Assisting in the implementation of the ticketing system',
    'Creating the responsive user interface based of Figma prototypes',
    'Helping the team to reduce the technical debt by managing Backlog task',
    'Working with the Agile Scrum methodology',
    'Code reviewing',
];

// 3. Fatland
export const fatlandIndustryList = ['Food Production'];

export const fatlandRolesList = ['Front-end Developer', 'Consultant'];

export const fatlandTechList1 = ['React', 'JavaScript', 'Styled Components', 'Bootstrap', 'C#'];

export const fatlandTechList2 = [
    'React',
    'JavaScript',
    'C#',
    'Azure',
    'DevOps',
    'Semantic UI',
    'Styled Components',
    'React Table',
    'React Hook Form',
    'Moment',
];

export const fatlandRespList = [
    'Implementing dynamic dashboards for tracking the livestock data',
    'Creating the responsive user interface based of Figma prototypes',
    'Code base management',
    'Code reviewing',
    'Working with the Agile Scrum methodology',
];

// 4. Udemy

export const udemyCourseTechList1 = ['PowerPoint', 'VBA', 'XML', 'Camtasia'];

// CODING PROJECTS
export const foodlyTechList = ['React', 'Redux', 'Toolkit', 'Firebase'];

export const scentShopTechList = ['C#', 'ASP.NET', 'Entity Framework'];

export const outdoorTechList = ['JavaScript', 'LeafletJS', 'Sass'];

export const restCountriesTechList = ['React', 'JavaScript'];

export const advisionTechList = ['JavaScript', 'Sass', 'BEM', 'LightboxJS'];

export const buddyLinguaTechList = ['Ruby on Rails', 'Bootstrap', 'Heroku'];
