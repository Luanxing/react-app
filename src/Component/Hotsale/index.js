import React from 'react'
import css from './index.module.scss'
import axios from 'axios'
import {getpromiseList} from './actionCreator'
import store from '../../Redux/store'
import {connect} from 'react-redux'
class Hotsale extends React.Component{
    state={
        // datalist:[]
    }
    render(){
        return(
            <div>   
               <ul className={css.ul4}>
                   <li><h2>热卖品牌</h2></li>
                   {
                       this.props.datalist.map((item)=>
                       <div className={css.box}>
                        <img className={css.img5} src={item.imageUrl} key={item.eventId}></img>
                        <p className={css.siloCategory}>{item.siloCategory}</p>
                        <p className={css.englishName}>{item.englishName}</p>
                        <p className={css.chineseName}>{item.chineseName}</p>
                        <p className={css.discountText}>{item.discountText}</p>
                       </div>           
                       )
                   }
                  
               </ul>   
            </div>
        )
    }
    componentDidMount(){
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
export default connect(mapStateToProps,mapDispatchToProps)(Hotsale)