import axios from 'axios'
const getPromiseList = () =>{

    return axios.get("http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=1&timestamp=1561528937870&summary=ce7fa86a960dd241563eda999a8b6d63&platform_code=H5").then(res=>{
        console.log(res.data);
        return{
        type:"getList",
        payload:res.data.eventList
    }
  
    })

    
}
export {getPromiseList}