import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import { FatlandProject, LifeAtWorkProject, SolintegraProject } from '../modules/Projects/CommercialProducts/index';
import { PersonalProjects, CommercialProducts } from '../modules/Projects/index';
import {
    AdvisionProject,
    FoodlyProject,
    OutdoorProject,
    ScentShopProject,
} from '../modules/Projects/PersonalProjects/index';
import UdemyProject from '../modules/Projects/PersonalProjects/UdemyProject';
import {
    ADVISION_PROJECT,
    FOODLY_PROJECT,
    LIFE_AT_WORK_PROJECT,
    FATLAND_PROJECT,
    OUTDOOR_PROJECT,
    ROOT,
    SCENTSHOP_PROJECT,
    SOLINTEGRA_PROJECT,
    UDEMY_PROJECT,
    PROJECTS,
} from './constants';

const RouterConfig = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROOT} element={<App />}>
                    <Route path={PROJECTS} element={<PersonalProjects />}></Route>
                    {/* TODO Redirect to Main if there is no third segment */}
                    <Route path={PROJECTS} element={<CommercialProducts />}>
                        <Route path={SOLINTEGRA_PROJECT} element={<SolintegraProject />} />
                        <Route path={FATLAND_PROJECT} element={<FatlandProject />} />
                        <Route path={LIFE_AT_WORK_PROJECT} element={<LifeAtWorkProject />} />
                        <Route path={FOODLY_PROJECT} element={<FoodlyProject />} />
                        <Route path={OUTDOOR_PROJECT} element={<OutdoorProject />} />
                        <Route path={UDEMY_PROJECT} element={<UdemyProject />} />
                        <Route path={SCENTSHOP_PROJECT} element={<ScentShopProject />} />
                        <Route path={ADVISION_PROJECT} element={<AdvisionProject />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouterConfig;
