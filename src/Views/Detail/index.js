import React from 'react'
class Detail extends React.Component{
    render(){
        return(
            <div> 
              详情页
               {
                this.props.children
               }
            </div>
        )
    }
}

export default Detail