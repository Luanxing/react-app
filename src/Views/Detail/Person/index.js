import React from 'react'
import CSS from './index.module.scss'
// import axios from 'axios'
class Person extends React.Component{
    render(){
        return(
            <div> 
        
              <p className={CSS.renqi}>renqi</p>

               {/* {
                this.props.children
               }  */}
            </div>
        )
    }
//     componentDidMount(){
//         axios.get('')
//     }
   }
    


export default (Person)