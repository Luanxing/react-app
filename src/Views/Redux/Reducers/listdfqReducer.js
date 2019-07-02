// action = {type:"getlist",payload:["1111","2222","3333"]}
const listdfqReducer = (prevState=[],action)=>{
  // console.log(action);
  let {type,payload} = action;
  // let newstate  = [...prevState]
  switch(type){
      case "getList":
          
          return [...prevState,...payload]
      case "removeList":
          return prevState
          // break;
      default :
          return prevState
  }
  // return newstate  // 返回值是什么， store 就被修改成相应的值
}

export default listdfqReducer