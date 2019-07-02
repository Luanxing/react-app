const listReducer = (prevState=[],action)=>{
    let {type,payload} = action;
    switch(type){
        case "getList":
            return [...prevState,...payload]
        case "removeList":
            return prevState
        default:
            return prevState
    }
}

export default listReducer