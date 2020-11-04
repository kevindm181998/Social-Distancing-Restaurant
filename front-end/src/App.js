import React from 'react';
import './App.css';
import {Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import BarNav from "./components/BarNav";
import CustomerOptions from "./components/CustomerOptions";
import history from "./history";

export class App extends React.Component {
    state = {
        logged_user: ''
    }

    render() {
        return (
            <div className="App">
                <BarNav/>
                <BrowserRouter history={ history }>
                    <Switch>
                        <Route exact path="/" render={ ()=><Redirect to="/login"/>} />
                        <Route path="/login" component={Login} />
                        <Route path="/mainmenu" component={CustomerOptions}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
