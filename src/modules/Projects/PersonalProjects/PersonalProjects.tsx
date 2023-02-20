import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const PersonalProjects = (): ReactElement => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default PersonalProjects;
