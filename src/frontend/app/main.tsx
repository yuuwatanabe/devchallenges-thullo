import React, { useState, useReducer, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Bookmarks from './pages/Bookmarks'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/home'>
                    <Home />
                </Route>
                <Route exact path='/explore'>
                    <Explore />
                </Route>
                <Route exact path='/bookmark'>
                    <Bookmarks />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.querySelector("#app"));
