import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Navbar/css/Navbar.css'
class Navbar extends React.Component{
    render(){
        return <div>
            <ul className="navlist1">
                <li><NavLink to="/tuijian" replace>推荐</NavLink></li>
                <li><NavLink to="/man" replace>男生</NavLink></li>
                <li><NavLink to="/woman" replace>女生</NavLink></li>
                <li><NavLink to="/crossborder" replace>海外</NavLink></li>
                <li><NavLink to="/cosmetics" replace>美妆</NavLink></li>
                <li><NavLink to="/lifestyle" replace>家居</NavLink></li>
                <li><NavLink to="/kids" replace>婴童</NavLink></li>
                <li className="end"><NavLink to="/coming" replace>即将上线</NavLink></li>
            </ul>
        </div>
    }
}

export default Navbar;