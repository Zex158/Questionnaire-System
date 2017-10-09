import config from '../config/base'
/*
 * 问卷页面类
 */
class Qpage {
    /**
     * @method      constructor
     * @description Qpage构造函数
     * @param       {string}    author      作者
     * @param       {date}      createdate  日期
     * @param       {string}    description 描述
     * @param       {string}    authority   权限
     * @param       {Array}     questions   问题信息
     */
    constructor(author='', createdate='', description='', authority='', questions = []) {
        this.author = author;
        this.createdate = createdate;
        this.description = description;
        this.authority = authority;
        this.questions = questions;
        //当前问题数
        this.quenum = questions.length;
        //问题数最大值
        this.max = config.MAX_QUESTION;
        //组件key值管理
        this.key = 0;
    }

    /**
     * @method      addQuestion
     * @description 添加问题
     * @param       {object} question 问题对象
     */
    addQuestion = question => {
        if(this.max <= this.quenum){
            console.error('question num has reached the maximum!');
            return;
        }
        let que = Object.assign({}, question, {index: ++this.quenum, key: this.key++});
        this.questions.push(que);
    }

    /**
     * @method      removeQuestion
     * @description 移除第index个问题
     * @param       {number} index 问题位置
     */
    removeQuestion = index => {
        this.questions.splice(index-1, 1);
        this.questions.forEach((que, ind) => {
            if(ind + 1 >= index){
                que.index = ind + 1;
            }
        });
        this.quenum--;
    }

}
export default Qpage;