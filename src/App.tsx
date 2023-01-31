import { ReactElement } from 'react';
import Footer from './common/Footer/Footer';
import { Layout } from './common/index';
import Main from './modules/Main/Main';

const App = (): ReactElement => {
    return (
        <Layout>
            <Main />
            <Footer />
        </Layout>
    );
};

export default App;
