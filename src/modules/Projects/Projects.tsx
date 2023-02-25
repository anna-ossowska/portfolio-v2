import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const Projects = (): ReactElement => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Projects;
