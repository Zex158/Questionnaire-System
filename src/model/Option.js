class Option {
    /**
     * @method      constructor
     * @description 选项
     * @param       {string}    index   索引 A、B、C、D
     * @param       {string}    content 选项内容
     */
    constructor(content, index='') {
        this.index = index;
        this.content = content;
    },

    //更新选项
    update(content = this.content, index = this.index) {
        this.index = index;
        this.content = content;
    }
}