import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ShowAll from "./components/ShowAll";
import Add from "./components/Add";
import Detail from "./components/Detail";
import Edit from "./components/Edit";

function App () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ShowAll}/>
                <Route exact path="/add" component={Add}/>
                <Route exact path="/detail/:id" component={Detail}/>
                <Route exact path="/edit/:id" component={Edit}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
