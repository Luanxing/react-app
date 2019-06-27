import React from 'react'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'

class Tabbar extends React.Component{
    // state={
    //     isfixed:this.props.chen
    // }
    render(){
        return(
           
                <ul className={css.ul1}>
                    <li className='daohang'><NavLink to='/recommend' activeClassName={css.myactive} replace>推荐</NavLink></li>
                    <li className='daohang'><NavLink to='/crossborder' activeClassName={css.myactive} replace>海外</NavLink></li>
                    <li className='daohang'><NavLink to='/women' activeClassName={css.myactive} replace>女士</NavLink></li>
                    <li className='daohang'><NavLink to='/men'activeClassName={css.myactive} replace>男士</NavLink></li>
                    <li className='daohang'><NavLink to='/cosmetics' activeClassName={css.myactive} replace>化妆品</NavLink></li>
                    <li className='daohang'><NavLink to='/lifestyle' activeClassName={css.myactive} replace>家具</NavLink></li>
                    <li className='daohang'><NavLink to='/kids' activeClassName={css.myactive} replace>婴童</NavLink></li>
                    <li className='daohang'><NavLink to='/upcoming' activeClassName={css.myactive} replace>即将上架</NavLink></li>
                </ul>
            
        )
    }
    // componentWillReceiveProps(){
    //     this.setState({
    //         isfixed:this.props.chen
    //     })
    // }
}
export default Tabbar

