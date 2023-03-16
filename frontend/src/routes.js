import React, {useState} from 'react';

import {BrowserRouter, Route, Switch} from 'react-routrer-dom';
import Logon from './pages/Logon';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Logon}/>
            </Switch>
        </BrowserRouter>
    );
}