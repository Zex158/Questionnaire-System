import React from 'react';

class Option extends React.Component {
    render = () => {
        return(
            <div className='q-item-box'>
                <h5 className='q-item-title'>A</h5>
                <input type='text' className='q-item-line' placeholder='请输入选项内容' />
                <button className='close-btn'>remove</button>
            </div>
        );
    }
}

export default Option;