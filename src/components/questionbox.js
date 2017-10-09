import React from 'react';
import Option from 'components/option';

class Questionbox extends React.Component {
    render = () => {
        return(
            <div className='q-box'>
                <h5 className='q-title'>index</h5>
                <input type='text' className='q-line' placeholder='请输入问题内容' />
                <button className='close-btn'>remove</button>
                <Option />
            </div>
        );
    }
}

export default Questionbox;