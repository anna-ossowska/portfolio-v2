import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const CommercialProducts = (): ReactElement => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default CommercialProducts;
