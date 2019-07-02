import React from 'react'
import CSS from './index.module.scss'
class Cosmetics extends React.Component{
    render(){
        return(
            <div>
             <p className={CSS.cosmetics}>Cosmetics</p> 
            </div>
        )
    }
}

export default Cosmetics