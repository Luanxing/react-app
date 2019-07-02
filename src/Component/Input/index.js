import React from 'react'
import "../../assets/iconfont/iconfont.css"
import css from './index.module.scss'
import Tabbar from '../../Component/Tabbar/index'
class Input extends React.Component{
    render(){
        return(
            <div className={this.props.myclass}>
                <p className={css.load}>登录</p>
                <p><i className="iconfont icon-search"></i></p>
                <input type='text'  className='shuru'></input>
                <Tabbar></Tabbar>
                {
                    this.props.children
                }
            </div>
        )
    }
}
export default Input