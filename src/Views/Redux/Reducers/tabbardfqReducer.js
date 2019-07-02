const tabbardfqReducer = (prevState=true,action)=>{
  // console.log(action);
  let {type,payload} = action;

  switch(type){
      case "ShowdfqTabbar":
          return payload
          break;
      case "HidedfqTabbar":
          return payload
          break;
      default :
          return prevState
  }
  // return newstate  // 返回值是什么， store 就被修改成相应的值
}

export default tabbardfqReducer