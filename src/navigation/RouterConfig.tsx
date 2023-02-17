import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import { CodingProjects, CommercialProductsOverview } from '../modules/Projects/index';
import {
    ADVISION_PROJECT,
    BUDDY_LINGUA_PROJECT,
    CODING_PROJECTS,
    COMMERCIAL_PRODUCTS,
    FOODLY_PROJECT,
    LIFE_AT_WORK_PROJECT,
    MITTFATLAND_PROJECT,
    OUTDOOR_PROJECT,
    REST_COUNTRIES_PROJECT,
    ROOT,
    SCENTSHOP_PROJECT,
    SOLINTEGRA_PROJECT,
    UDEMY_PROJECT,
} from './constants';

const RouterConfig = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROOT} element={<App />}>
                    <Route path={CODING_PROJECTS} element={<CodingProjects />}>
                        <Route path={FOODLY_PROJECT} element={<CommercialProductsOverview />} />
                        <Route path={SCENTSHOP_PROJECT} element={<CommercialProductsOverview />} />
                        <Route path={OUTDOOR_PROJECT} element={<CommercialProductsOverview />} />
                        <Route path={REST_COUNTRIES_PROJECT} element={<CommercialProductsOverview />} />
                        <Route path={ADVISION_PROJECT} element={<CommercialProductsOverview />} />
                        <Route path={BUDDY_LINGUA_PROJECT} element={<CommercialProductsOverview />} />
                    </Route>
                    <Route path={COMMERCIAL_PRODUCTS} element={<CommercialProductsOverview />}>
                        <Route path={SOLINTEGRA_PROJECT} element={<CommercialProductsOverview />} />
                        <Route path={MITTFATLAND_PROJECT} element={<CommercialProductsOverview />} />
                        <Route path={LIFE_AT_WORK_PROJECT} element={<CommercialProductsOverview />} />
                        <Route path={UDEMY_PROJECT} element={<CommercialProductsOverview />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouterConfig;
