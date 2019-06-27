import React from 'react'
import css from './index.module.scss'
import axios from 'axios'
import {getpromiseList} from './actionCreator'
import store from '../../Redux/store'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import Filmitem from '../Filmitem/index'
class Updatetoday extends React.Component{
    state={
        // datalist:[]
    }
    render(){
        return(
            <div>   
               <ul className={css.ul4}>
                   <li><h2>今日上新</h2></li>
                   {
                       this.props.datalist.map((item)=>
                       <div className={css.box}>
                        <li key={item}><NavLink to={'/detail/'+item.eventId}><img className={css.img5} src={item.imageUrl} key={item.eventId}></img></NavLink></li>
                        <li key={item}><NavLink to={'/detail/'+item.eventId}><p className={css.siloCategory}>{item.siloCategory}</p></NavLink></li>
                        <li key={item}><NavLink to={'/detail/'+item.eventId}><p className={css.englishName}>{item.englishName}</p></NavLink></li>
                        <li key={item}><NavLink to={'/detail/'+item.eventId}><p className={css.chineseName}>{item.chineseName}</p></NavLink></li>
                        <li key={item}><NavLink to={'/detail/'+item.eventId}><p className={css.discountText}>{item.discountText}</p></NavLink></li>
                       </div>             
                       )
                   }

               </ul> 
            </div>
        )
    }
    componentDidMount(){
        // axios.get('http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1561528314536&summary=eec94295083212b37d55c7e2e4afb3ec&platform_code=H5').then(res=>{
        //     // console.log(res.data.lists[1])
          
        //     // this.setState({
        //     //     datalist:res.data.lists[0]
        //     // })  
        // })
        // console.log(store.getState(),'12312312')
        if(store.getState().list.length===0){
            this.props.getComingsoonlist()
        }
    }   
}
const mapStateToProps =(state)=>{
    return{
        datalist:state.list
    }
}
const mapDispatchToProps={
    getComingsoonlist:getpromiseList
}
export default connect(mapStateToProps,mapDispatchToProps)(Updatetoday)