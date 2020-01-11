let initState = {
    xqysja: {},
    zhanghao: '',
    arr: [],
    stop: ''
}
const reducer = function (state = initState, { type, payload }) {
    if (type == 'xqysj') {
        return {
            ...state,
            xqysja: payload
        }
    }
    if (type == "shujuku") {
        return {
            ...state,
            arr: payload
        }
    }
    if (type == 'xiugai') {
        let arr = state.arr.map(item => {
            if (item.uid == payload.id) {
                item.num = payload.value
            }
            return item
        })
        return {
            ...state,
            arr
        }
    }
    if (type == 'tianjia') {
        return {
            ...state,
            arr: [payload, ...state.arr]
        }
    }
    if (type == "shanchu") {
        let arr = state.arr.filter(item => {
            return item.uid != payload.uid
        })
        return {
            ...state,
            arr
        }
    }
    if (type == "qingkong") {
        return {
            ...state,
            arr: []
        }
    }
    if (type == "cun") {
        return {
            ...state,
            stop: payload.stop
        }
    }
    else {
        return {
            ...state,
            xqysja: state.xqysja
        };
    }
}
export default reducer;