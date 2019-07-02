const tabbarReducer =(prevstate=true,action) =>{//此action是detail组件dispatch过来的
    // console.log(action)//获得 type:'HIDETABBAR',payload:false
    let{type,payload}=action
    // var newstate = {...prevstate}//reducer要对老状态进行深复制,则newstate有了prevstate的属性
    switch(type){//判断Type类型
        case 'SHOWTABBAR':
        return payload
  
        case 'HIDETABBAR':
        return payload
     
        default:
        return prevstate
    }
}
export default tabbarReducer