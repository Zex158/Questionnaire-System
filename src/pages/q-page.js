import React from 'react';
import queryString from 'query-string';
import Questionbox from 'components/questionbox';
import Page from 'model/Qpage';
import Question from 'model/Question';

require('styles/q-page.less');

class Qpage extends React.Component {
    constructor(props) {
        super(props);
        const query = queryString.parse(location.search);
        const { action, id } = query;
        this.state = {
            action,
            id,
            page: new Page()
        }
    }

    componentDidMount = () => {

    }

    addQuestion = type => {
        if(Number.isInteger(type) && type<5 && type>0){
            this.setState( preState => {
                preState.page.addQuestion(new Question(type));
                return { page: preState.page };
            });
        }else{
            return;
        }
    }


    removeQuestion = index => {
        this.setState( preState => {
            preState.page.removeQuestion(index);
            return { page: preState.page };
        })
    }

    addOption = key => {
        this.setState(preState => {
            for(let que of preState.page.questions){
                if(que.key == key){
                    que.addOption(new Option());
                    return { page: preState.page };
                }
            }
            console.error('option key error!');
            return;
        })
    }

    removeOption = (qKey, index) => {
        this.setState(preState => {
            for(let que of preState.page.questions){
                if(que.key == qKey){
                    que.removeOption(index);
                    return { page: preState.page };
                }
            }
            console.error('option key error!');
            return;
        })
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

                    {this.state.page.questions.map(question => {
                        return (<Questionbox
                                    question = {question}
                                    key = {question.key}
                                    removeQuestion = {this.removeQuestion}
                                    action = {this.state.action}
                                    addOption={this.addOption}
                                    removeOption={this.removeOption} />);
                    })}

                    <br />
                    <div className='q-btn-box'>
                        <span className="q-add">添加</span>
                        <button className="q-btn" id="q-btn-1" onClick={this.addQuestion.bind(this, 1)}>单选</button>
                        <button className="q-btn" id="q-btn-2" onClick={this.addQuestion.bind(this, 2)}>多选</button>
                        <button className="q-btn" id="q-btn-3" onClick={this.addQuestion.bind(this, 3)}>问答</button>
                        <button className="q-btn" id="q-btn-4" onClick={this.addQuestion.bind(this, 4)}>混合</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Qpage;