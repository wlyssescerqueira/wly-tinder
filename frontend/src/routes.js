import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Banco from './pages/Banco';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Banco} />
            <Route path="/login" exact component={Login} />
            <Route path="/dev/:id" component={Main} />
        </BrowserRouter>
    );
}
