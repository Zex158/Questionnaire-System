import React from 'react';

require('styles/footer.less');
class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
                <div className='container'>
                    <p className='footer-author'>@author zx</p>
                </div>
            </footer>
        );
    }
}

export default Footer;