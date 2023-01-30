import { ReactElement } from 'react';
import { Layout } from './common/index';
import Main from './modules/Main/Main';

const App = (): ReactElement => {
    return (
        <Layout>
            <Main />
        </Layout>
    );
};

export default App;
