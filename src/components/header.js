import React from 'react';
import {
    Link
} from 'react-router-dom';

require('styles/header.less');

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <Link to="/" className='header-logo'>Questionnaire System</Link>
                    <div className='header-btn-group'>
                        <Link to="/login" className='header-btn'>登录</Link>
                        <Link to="/register" className='header-btn'>注册</Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;