import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Header from 'components/header';
import Rooter from 'components/rooter';
import Menu from 'components/menu';


require('normalize.css/normalize.css');


class AppComponent extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route path="/" component={Menu}/>
                    <Rooter/>
                </div>
            </Router>
        );
    }
}

export default AppComponent;