import React from 'react'
import {withRouter} from 'react-router'
class Filmitem extends React.Component{
    render(){
        var item = this.props.info
        return(
            <li onClick={ this.handleclick} >
                {/* <img src={item.img.replace('w.h','128.180')} alt={item}></img> */}
                {/* 或者定义一个filter函数方法，来过滤图片路径 */}
                <img src={this.filter(item.img)} alt={item.nm}></img>
                <h3>{item.nm}</h3>
            </li>
        )
    }
    filter(path){
        return path.replace('w.h','128.180')
    }
    handleclick=()=>{//点击跳转详情页面
        // console.log(this.props)
        // this.props.info是info{item}，item是movelist，id为movelist数据里的id
        var id = this.props.info.id
        this.props.history.push(`/detail/${id}`)
    }

}
export default withRouter(Filmitem)
