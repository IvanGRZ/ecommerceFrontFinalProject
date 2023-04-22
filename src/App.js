import React from 'react';
import AppContext from '../src/Context/AppContext'
import useInitialState from './hooks/useInitialState/index';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routes/index'
import CustomTheme from './theme';

const App = () => {

  const initialState = useInitialState();

    return (
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <CustomTheme>
            <Routers/>
          </CustomTheme>        
        </BrowserRouter>
      </AppContext.Provider>

    );
}

export default App;