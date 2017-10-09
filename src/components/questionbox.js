import React from 'react';
import Option from 'components/option';

class Questionbox extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount = ()=> {

    }

    render = () => {
        return(
            <div className='q-box'>
                <h5 className='q-title'>{this.props.question.index}</h5>
                <input ref="content" type='text' className='q-line' placeholder='请输入问题内容' />
                <button className='close-btn' onClick={()=>{this.props.removeQuestion(this.props.question.index)} }>remove</button>
                {this.props.question.options.map(opt => {
                    return <Option
                                key = {opt.key}
                                option = {opt}
                                action = {this.props.action}
                                type = {this.props.question.type} />
                })}
                <button className='opt-add-btn'>add option</button>
            </div>
        );
    }
}

export default Questionbox;