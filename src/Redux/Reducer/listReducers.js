const listReducer =(prevstate=[],action) =>{
    let{type,payload}=action
    // var newstate = {...prevstate}//reducer要对老状态进行深复制,则newstate有了prevstate的属性
    switch(type){//判断Type类型
        case 'getList':
        return [...prevstate,...payload]//深复制老状态，并合并新的列表数据
        default:
        return prevstate
    }
}
export default listReducer