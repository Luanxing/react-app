//定义一个action生成器
const HideTabbar =()=>({
    type:'HIDETABBAR',
    payload:false
})
const ShowTabbar =()=>({
    type:'SHOWTABBAR',
    payload:true
})
export {HideTabbar,ShowTabbar}