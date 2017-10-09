import React from 'react';
import queryString from 'query-string';
import Questionbox from 'components/questionbox'

class Qpage extends React.Component {
    constructor(props) {
        super(props);
        const query = queryString.parse(location.search);
        const { action, id } = query;
        this.state = {
            action,
            id
        }
    }

    componentDidMount = () => {

    }

    render = () => {
        return (
            <div className='container'>
                <div className='q-page-container'>
                    <div className='q-box'>
                        <h5 className='q-title'>问卷主题</h5>
                        <input type='text' className='q-line' placeholder='请输入问卷主题' />
                    </div>
                     <div className='q-box'>
                        <h5 className='q-title'>问卷描述</h5>
                        <textarea className='q-mulLine' placeholder='请输入问卷描述'></textarea>
                    </div>

                    <Questionbox />

                    <br />
                    <div className='q-btn-box'>
                        <span className="q-add">添加</span>
                        <button className="q-btn" id="q-btn-1">单选</button>
                        <button className="q-btn" id="q-btn-2">多选</button>
                        <button className="q-btn" id="q-btn-3">问答</button>
                        <button className="q-btn" id="q-btn-4">混合</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Qpage;