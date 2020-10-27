import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from "../src/pages/homepage/homepage.component";


const HatsPage = () => (
    <div>
        <h1>BUY OUR HATS</h1>
    </div>
)

    function App() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route component={HatsPage} path='/hats'/>
                </Switch>
            </div>
        );
    }

export default App;
