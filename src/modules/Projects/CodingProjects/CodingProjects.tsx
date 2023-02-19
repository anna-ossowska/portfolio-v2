import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const CodingProjects = (): ReactElement => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default CodingProjects;
