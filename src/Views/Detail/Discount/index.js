import React from 'react'
import CSS from './index.module.scss'
import axios from 'axios'
class Discount extends React.Component{
    render(){
        return(
            <div> 
        
            <h2 className={CSS.discount}>折扣</h2>

               {
                this.props.children
               }
            </div>
        )
    }
   }
    


export default (Discount)