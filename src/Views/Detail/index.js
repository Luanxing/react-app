import React from 'react'
import store from '../../Redux/store'
import { HideTabbar,ShowTabbar } from './actionCreator';
import {connect} from  'react-redux'
import Listbar from '../../Component/Listbar/index'
import axios from 'axios'
class Detail extends React.Component{
    render(){
        return(
            <div> 
        
              <Listbar></Listbar>

               {
                this.props.children
               }
            </div>
        )
    }
    componentWillMount(){
        //隐藏选项卡
        this.props.hide()//子传父
    }
    // componentDidMount(){
    //     axios.get('').then(res=>{

    //     })
    //     console.log(this.props.location.)
    // }
    componentWillUnmount(){
        //显示选项卡
        this.props.show()
    }
}
const  mapDispatchToProps = {
    show:ShowTabbar,
    hide:HideTabbar
}

export default connect(null,mapDispatchToProps)(Detail)