//生成4位数的随机数并返会
function ranNum() {
        var html = '';
        for(var i = 0; i < 4; i++) {
            var num = parseInt(Math.random() * 10);//0.1-9.99 0-9
            html += num;
        }
        return html
}
export default ranNum();
