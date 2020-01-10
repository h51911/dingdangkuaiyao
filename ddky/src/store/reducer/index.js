let initState = {
    xqysja: {}
}
const reducer = function (state = initState, {type,payload}) {
    // console.log(type, payload);

    if (type == 'xqysj') {
        return {
            xqysja: payload
        }
    } else {
        return {
            xqysja: state.xqysja
        };
    }


}
export default reducer;