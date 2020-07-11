import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ShowAll from "./components/ShowAll";
import Add from "./components/Add";
import Detail from "./components/Detail";

function App () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ShowAll}/>
                <Route exact path="/add" component={Add}/>
                <Route exact path="/detail/:id" component={Detail}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
