import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Wrapper from "./pages/Wrapper/Wrapper";


class App extends Component {
    render (){
        return (
            <BrowserRouter>
                <Wrapper />
            </BrowserRouter>
        );
    }
}

export default App;


