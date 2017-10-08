import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Header from 'components/header';
import Footer from 'components/footer';
import Menu from 'components/menu';
import Register from 'components/register';
import Login from 'components/login';
import Qpage from 'pages/q-page';

require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/common.less');


class AppComponent extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                        <div className='main'>
                            <Route path='/'  exact component={Menu} />
                            <Route path='/register' component={Register} />
                            <Route path='/login' component={Login} />
                            <Route path='/q-page' component={Qpage} />
                        </div>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default AppComponent;