import React from 'react'

import axios from 'axios'
class Price extends React.Component{
    render(){
        return(
            <div> 
        
              人气

               {
                this.props.children
               }
            </div>
        )
    }
   }
    


export default (Price)