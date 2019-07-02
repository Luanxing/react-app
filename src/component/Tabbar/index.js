import React from 'react'
import {NavLink} from 'react-router-dom'
import './css/Tabbar.css'
class Tabbar extends React.Component{
    render(){
        return <div>
            <ul className="navlist2">
                <li><NavLink to="/productlist/popular" replace>人气</NavLink></li>
                <li><NavLink to="/productlist/scale" replace>折扣</NavLink></li>
                <li><NavLink to="/productlist/price" replace>价格</NavLink></li>
                <li><NavLink to="/productlist/select" replace>筛选</NavLink></li>
            </ul>
        </div>
    }

}

export default Tabbar;