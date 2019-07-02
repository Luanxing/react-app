import React from 'react'
import axios from 'axios'
import css from './index.module.scss'
import {NavLink,withRouter} from 'react-router-dom'

class Listbar extends React.Component{
    state={
        datalist:[],
        datalist1:[],
        datalist3:[],
        priceup:false
    }
    render(){
        return(
            <div>
                <h3 className={css.title}>{this.state.datalist.eventName}</h3>
                <ul className={css.ul5}>
                    <li className={css.li5}><NavLink to={(this.props.detailname)} onClick={this.personRequest} activeClassName={css.checked} replace>人气</NavLink></li>
                    <li className={css.li5}><NavLink  to={this.props.detailname} onClick={this.discountRequest} activeClassName={css.checked} replace>折扣</NavLink></li>
                    <li className={css.li5}><NavLink  to={this.props.detailname} onClick={this.priceRequest} activeClassName={css.checked} replace>价格</NavLink></li>
                    <li className={css.li5}><NavLink  to={this.props.detailname} activeClassName={css.checked} replace>筛选</NavLink></li>
                </ul>
                
                <ul className={css.ul7}>
                    <li>{this.state.datalist1.info}</li>
                    <li>{this.state.datalist3.map((item)=>
                        <li className={css.pic}>
                            <img src={item.imageUrl} className={css.korean}></img>
                            <h3>{item.brandName}</h3>
                            <p>{item.productName}</p>
                            <p className={css.price}>￥{item.price}</p>
                        </li>
                     )}
                    </li>
                </ul>

            </div>
        )
    }
    

    personRequest=()=>{
        axios.get(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=&sort=&timestamp=1561700342090&summary=1f4e50700c2bd49cc70e8e7e355bfc3e&platform_code=H5`).then(res=>{
            // console.log(res.data.products[0],'11111')
            this.setState({
                datalist1:res.data.promotions,
                datalist3:res.data.products
            })

        })
    }
    discountRequest=()=>{
        axios.get(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=1&sort=ASC&timestamp=1561707560493&summary=6ce18f890b53b1b46cdf8d3e0666a982&platform_code=H5`).then(res=>{
            // console.log(res.data.products,'ggggggg')
            this.setState({
                datalist1:res.data.promotions,
                datalist3:res.data.products
            })
        })
    }
    priceRequest=()=>{
        if(this.state.priceup){
           axios.get(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=&sort=DESC&timestamp=1561709915472&summary=d0633503cf98d7259cd2956a036f52d4&platform_code=H5`).then(res=>{
            this.setState({
                datalist1:res.data.promotions,
                datalist3:res.data.products,
                priceup:!this.state.priceup,
                     
            })
        }) 
        }else{
            axios.get(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=&sort=ASC&timestamp=1561709917542&summary=035b85f24300bfff16c48860f64e3c84&platform_code=H5`).then(res=>{
                this.setState({
                    datalist1:res.data.promotions,
                    datalist3:res.data.products,
                    priceup:!this.state.priceup
                })
            })
        }
        
    }

    componentDidMount(){
        axios.get(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=&sort=&timestamp=1561683299052&summary=4709bdf80a5b8ff48b18a26b2caf4825&platform_code=H5`).then(res=>{
            this.setState({
                datalist:res.data
            })
        })
      
    }
}
export default withRouter(Listbar)