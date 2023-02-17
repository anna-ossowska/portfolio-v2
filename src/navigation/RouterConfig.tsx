import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import { CodingProjects, CommercialProducts } from '../modules/Projects/index';
import { CODING_PROJECTS, COMMERCIAL_PRODUCTS, ROOT } from './constants';

const RouterConfig = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROOT} element={<App />}>
                    <Route path={CODING_PROJECTS} element={<CodingProjects />} />
                    <Route path={COMMERCIAL_PRODUCTS} element={<CommercialProducts />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouterConfig;
