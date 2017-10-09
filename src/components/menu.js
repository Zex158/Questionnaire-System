import React from 'react';
import {Link}from 'react-router-dom';

require('styles/menu.less');

class Menu extends React.Component {
    render() {
        return (
            <div className='container'>
                <ul className='menu'>
                    <li><Link to='/q-page?action=create' className='menu-item'>创建问卷</Link></li>
                    <li><Link to='/q-page?action=watch' className='menu-item'>查看问卷</Link></li>
                    <li><Link to='/q-page?action=answer' className='menu-item'>填写问卷</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;