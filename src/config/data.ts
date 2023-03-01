import Solintegra11 from '../assets/images/projects/solintegra/solintegra-1-1.jpg';
import Solintegra22 from '../assets/images/projects/solintegra/solintegra-2-2.jpg';
import Solintegra23 from '../assets/images/projects/solintegra/solintegra-2-3.jpg';
import Solintegra34 from '../assets/images/projects/solintegra/solintegra-3-4.jpg';
import Solintegra45 from '../assets/images/projects/solintegra/solintegra-4-5.jpg';
import Solintegra46 from '../assets/images/projects/solintegra/solintegra-4-6.jpg';
import Solintegra57 from '../assets/images/projects/solintegra/solintegra-5-7.jpg';

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
    'Material UI (MUI)',
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

export const solintegraRolesList = ['Lead Front-end Developer', 'Tech Lead', 'Consultant'];

export const solintegraTechList1 = ['AWS Aplify', 'React', 'TypeScript', 'Redux Toolkit', 'MUI'];

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
    'Implementing the front-end architecture, authentication and state management',
    'Integrating the application with AWS Amplify',
    'Creating responsive user interfaces based on Figma prototypes',
    'Implementing a Solar Roof Calculator',
    'Writing technical documentation',
    'Conducting code reviews',
    'Providing project management and technical advisory services',
];

export const solintegraUserStoriesList = [
    'As an Admin, I want to see an overview of all inquiries in the system so that I can track their status and see if a customer needs attention.',
    'As an Admin, I want to be able to administrate individual inquiries to make sure changes are documented where everybody involved can be informed.',
    'As a Partner I want an overview of all the actions I need to take in a lead so that I can follow a structured workflow that follows the Solintegra’s requirements.',
    'As a Partner I need to enter the information that I gather on-site, web or on the phone with the customer in order to make an appropriate offer.',
    'As a Partner I need help to figure out how many solar cell panels fit the roof and how much energy they would generate based on the information from the building because this is too complex to do manually.',
];

export const solintegraDescription =
    'Solintegra is a back-office solution where Partners are empowered to take part in the green shift by getting the know-how and possibility to easily estimate prices and number of solar panels fitting a roof. In addition, the portal helps with the process of advising customers independently on the use, planning and pricing for building integrated solar panel solutions (BIPV).';

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
        imageGroup: 2,
        path: Solintegra23,
    },
    {
        imageGroup: 3,
        path: Solintegra34,
    },
    {
        imageGroup: 4,
        path: Solintegra45,
    },
    {
        imageGroup: 4,
        path: Solintegra46,
    },
    {
        imageGroup: 5,
        path: Solintegra57,
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

export const lifeAtWorkDescription =
    'The digital platform for building owners to manage all services and resources related to their building through a common portal. This solution allowed tenants, operating organizations, and building owners to access services based on their role and needs.';

export const lifeAtWorkRespList = [
    'Assisting in the implementation of the ticketing system',
    'Creating responsive user interfaces based of Figma prototypes',
    'Managing the Backlog tasks to reduce technical debt',
    'Working with the Agile Scrum methodology',
    'Conducting code reviews',
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

export const fatlandDescription =
    'The portal designed for Norwegian farmers and meat producers. It provides solutions for monitoring livestock production, as well as efficient administration of purchase and sales activities.';

export const fatlandRespList = [
    'Implementing dynamic dashboards to track livestock data',
    'Managing the code base',
    'Creating responsive user interfaces based of Figma prototypes',
    'Conducting code reviews',
    'Working with the Agile Scrum methodology',
];

// 4. Udemy

export const udemyCourseDescription =
    'I contributed to the global learning community by designing and publishing an online course on the Udemy platform about creating PowerPoint presentations and data visualizations. Currently, the course has more than 600 active students. It includes examples based on my professional experience as a Graphic & Web Designer. Many of the tips and tricks I share with my students originate from the questions asked by my colleagues during the training sessions and team projects. In this course I teach how to create modern slides and concept diagrams, build the professional PowerPoint templates from scratch, format photographs, use XML to program the custom colour palettes, tackle tasks faster with shortcuts and VBA macros, and more.';

export const udemyCourseTechList1 = ['PowerPoint', 'VBA', 'XML', 'Camtasia'];

// CODING PROJECTS

// 1. Foodly
export const foodlyTechList1 = ['React', 'Redux Toolkit', 'Firebase'];

export const foodlyTechList2 = [
    'ReactJS',
    'Redux Toolkit',
    'React Router Dom',
    'Firebase',
    'Netlify',
    'Git',
    'Github',
    'Figma',
    'Adobe Creative Cloud',
];
export const foodlyDescription =
    'Foodly is a restaurant order taking app built in ReactJS. The potential user of the website can search through available meals, add/remove meals to/from the shopping cart, fill the order form and complete the order. The application relies heavily on Redux Toolkit for the state management, as well as uses the Firebase real-time database. Foodly app is responsive on all devices and was deployed with Netlify.';

export const scentShopTechList1 = ['C#', 'ASP.NET', 'Entity Framework'];

export const scentShopTechList2 = [
    'C#',
    'ASP.NET Core MVC 5',
    'Entity Framework',
    'Azure',
    'Bootstrap',
    'JavaScript',
    'Figma',
    'Cloudinary',
    'Adobe Creative Cloud',
    'Git',
    'Github',
];

export const scentShopDescription =
    'ScentShop is a website designed for selling perfumes online. It was built mostly with C# and ASP.NET Core MVC 5. The application has the following features: add/remove a product to/from the shopping cart, complete the order, search by categories or product names, filter data, log in, sign up, as well as edit the user profile. The website uses the database, is responsive on all devices, and was deployed with Azure.';

export const outdoorTechList1 = ['JavaScript', 'LeafletJS', 'Sass'];

export const outdoorTechList2 = [
    'JavaScript',
    'Leaflet JS',
    'OpenWeatherMap API',
    'Netlify',
    'Sass',
    'BEM',
    'Figma',
    'Adobe Creative Cloud',
    'Git',
    'Github',
];

export const outdoorDescription =
    'Outdoor is an application designed for keeping track of workout location and training frequency. This project relies heavily on DOM manipulation and OOP paradigm. The application logic was built entirely with JavaScript language. The internal features include, above all: adding/deleting workout to/from a list, calculating speed and calories burned, marking workout location on the map, as well as displaying information about the local weather coming from the API. The workout data is persisted inside the Local Storage. This application is responsive on all devices and was deployed with Netlify.';

export const restCountriesTechList1 = ['React', 'JavaScript'];

export const advisionTechList1 = ['Sass', 'BEM', 'LightboxJS'];

export const advisionTechList2 = [
    'Sass',
    'BEM',
    'Lightbox JS',
    'JavaScript',
    'Netlify',
    'Figma',
    'Adobe Creative Cloud',
    'Git',
    'Github',
];

export const advisionDescription =
    'Advision is a website tailored for the consulting company. During the development phase I paid special attention to creating a scalable front-end architecture by using the 7-1 pattern combined with BEM methodology. The website contains many reusable Sass components which results in consistent look and feel across all pages. The application is fully responsive and was deployed with Netlify.';
