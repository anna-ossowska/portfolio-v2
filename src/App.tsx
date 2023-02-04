import { ReactElement } from 'react';
import { Layout, Navbar, Footer } from './common/index';
import MainContent from './modules/MainContent/MainContent';

const App = (): ReactElement => {
    return (
        <div>
            <Navbar />
            <Layout>
                <MainContent />
                <Footer />
            </Layout>
        </div>
    );
};

export default App;
