import config from 'config/base'

/**
 * Question类
 */
class Question {
    /**
     * @method      constructor
     * @description Question构造函数
     * @param       {string}    type    问题类型：[简答题型，单选题型， 多选题型， 简答单选混合]
     * @param       {string}    content 问题内容
     * @param       {Boolean}   ifmust  是否必答
     * @param       {Array}     options 选项
     * @param       {number}    index   问题标号, 由Qpage管理
     */
    constructor(type, content, ifmust = true, options = [], index=null) {
            this.index = qIndex;
            this.type = type;
            this.ifmust = ifmust;
            this.content = content;
            this.options = options;
            this.answer = null;
            //可添加最大选项数
            this.max = config.MAX_OPTIONS;
            this.optnum = options.length;

            this.options.forEach((opt, ind) => {
                opt.index = _updateIndex(ind + 1);
            })
    }

    /**
     * @method      addOption
     * @description 添加选项
     * @param       {object} option option对象
     */
    addOption = (option) => {
        if(this.max <= this.optnum){
            console.error('option num has reached the maximum!');
            return;
        }
        let opt = Object.assign({}, option, {index: this._updateIndex(this.optnum++)});
        this.options.push(opt);
    }

    /**
     * @method
     * @description 移除选项
     * @param       {string|number} index 数字index或字母index
     */
    removeOption = (index) => {
        //如果index为字母index，先转化为数字index
        if(!Number.isInteger(index)){
            this.options.map((opt, ind) => {
                if(opt.index == index){
                    index = ind;
                }
            })
        }
        //移除该选项
        this.options.splice(index, 1);
        //更新该选项之后选项丶index值
        this.options.forEach((opt, ind)=>{
            if(ind + 1 >= index){
                opt.index = this._updateIndex(ind+1);
            }
        });
        this.optnum--;
    }

    //将数值index转化为字母index
    _updateIndex = (num) => String.fromCharCode('A'.charCodeAt() + num - 1),
}

export default Question;