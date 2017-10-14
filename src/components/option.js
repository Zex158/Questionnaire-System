import React from 'react';

require('styles/option.less');

class Option extends React.Component {
    constructor(props){
        super(props);
    }

    removeOption = () => {
        this.props.removeOption(this.props.option.index);
    }

    render = () => {
        return(
            <div className='q-item-box'>
                <h5 className='q-item-title'>{this.props.option.index}</h5>
                <input type='text' className='q-item-line' placeholder='请输入选项内容' value={this.props.option.content} />
                <button className='close-btn' onClick={this.removeOption} >remove</button>
            </div>
        );
    }
}

export default Option;