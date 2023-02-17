import { ReactElement } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout, Navbar, Footer } from './common/index';
import Main from './modules/Main/Main';
import { ROOT } from './navigation/constants';

const App = (): ReactElement => {
    const { pathname: currentPath } = useLocation();

    return (
        <div>
            <Navbar />
            <Layout>
                {currentPath === ROOT && <Main />}
                <Outlet />
                <Footer />
            </Layout>
        </div>
    );
};

export default App;
