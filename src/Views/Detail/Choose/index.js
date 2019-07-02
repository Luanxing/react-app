import React from 'react'


class Choose extends React.Component{
    render(){
        return(
            <div> 
        
            筛选

               {
                this.props.children
               }
            </div>
        )
    }
   }
    


export default (Choose)