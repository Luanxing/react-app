const HidedfqTabbar = ()=>({
  type:"HidedfqTabbar",
  payload:false // payload 不是固定的
})


const ShowdfqTabbar = ()=>({
  type:"ShowdfqTabbar",
  payload:true // payload 不是固定的
})

export {HidedfqTabbar,ShowdfqTabbar}