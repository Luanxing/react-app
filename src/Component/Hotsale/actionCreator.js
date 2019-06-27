import axios from 'axios'

const getpromiseList = () =>{

    //发送Ajax请求
   return axios.get('http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1561530721916&summary=031e7462c6410d9b4438588b112badca&platform_code=H5').then(res=>{
        console.log(res.data.lists[1],'2222222')
        return {
            type:'getList',
            payload:res.data.lists[1].events
        } 
    })
}
export {getpromiseList}