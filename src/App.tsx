import React from 'react';

import GlobalStyle from './styles/global';
// import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import AppProvider from './hooks';


const App: React.FC = () => (
    <>
        <AppProvider>
            {/* <SignUp /> */}
            <SignIn />
        </AppProvider>

        <GlobalStyle />
    </>
)
export default App;
