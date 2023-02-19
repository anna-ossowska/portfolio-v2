import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import { FoodlyProject } from '../modules/Projects/CodingProjects/index';
import { FatlandProject, LifeAtWorkProject, SolintegraProject } from '../modules/Projects/CommercialProducts/index';
import { CodingProjects, CommercialProducts } from '../modules/Projects/index';
import {
    ADVISION_PROJECT,
    BUDDY_LINGUA_PROJECT,
    CODING_PROJECTS,
    COMMERCIAL_PRODUCTS,
    FOODLY_PROJECT,
    LIFE_AT_WORK_PROJECT,
    FATLAND_PROJECT,
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
                        <Route path={FOODLY_PROJECT} element={<FoodlyProject />} />
                        <Route path={SCENTSHOP_PROJECT} element={<CommercialProducts />} />
                        <Route path={OUTDOOR_PROJECT} element={<CommercialProducts />} />
                        <Route path={REST_COUNTRIES_PROJECT} element={<CommercialProducts />} />
                        <Route path={ADVISION_PROJECT} element={<CommercialProducts />} />
                        <Route path={BUDDY_LINGUA_PROJECT} element={<CommercialProducts />} />
                    </Route>
                    {/* TODO Redirect to Main if there is no third segment */}
                    <Route path={COMMERCIAL_PRODUCTS} element={<CommercialProducts />}>
                        <Route path={SOLINTEGRA_PROJECT} element={<SolintegraProject />} />
                        <Route path={FATLAND_PROJECT} element={<FatlandProject />} />
                        <Route path={LIFE_AT_WORK_PROJECT} element={<LifeAtWorkProject />} />
                        <Route path={UDEMY_PROJECT} element={<CommercialProducts />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouterConfig;
