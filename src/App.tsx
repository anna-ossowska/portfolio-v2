import { ReactElement } from 'react';
import Footer from './common/Footer/Footer';
import { Layout, Navbar } from './common/index';
import Main from './modules/Main/Main';

const App = (): ReactElement => {
    return (
        <div>
            <Navbar />
            <Layout>
                <Main />
                <Footer />
            </Layout>
        </div>
    );
};

export default App;
