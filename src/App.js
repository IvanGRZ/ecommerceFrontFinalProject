import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routes/index'
import CustomTheme from './theme';

const App = () => {

    return (
      <BrowserRouter>
        <CustomTheme>
          <Routers/>
        </CustomTheme>        
      </BrowserRouter>

    );
}

export default App;