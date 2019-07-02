import React from "react";
import axios from 'axios'
import css from "./index.module.scss";
import {HidedfqTabbar,ShowdfqTabbar} from './actionCreator'
import {connect} from 'react-redux'
import "../../iconfont/font_1040995_r82qy65tzlr/iconfont.css";
import { NavLink} from "react-router-dom";
import {withRouter} from 'react-router'
import Swiperchildren from "./Swiperchildren";
// import { PullToRefresh, ListView } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';

class Commodity extends React.Component{
  
  constructor(props) {
    super(props);
      this.state = {
       commodityLists: [],
      }
    }
  render () {
    return <div>
      <div className={css.commodity}>
        <div className={css.commodityDh1}>
         <div className={css.commodityDh11}>
            <NavLink to={`/baby`} className={css.commodityDhaa} replace>
              <span className={css.commodityDhaa1}><i className="iconfont icon-xiangzuo"></i></span>
            </NavLink>
          </div>
        <div className={css.commodityDh12}>
          <span className={css.commodityDh12a}>{this.state.commodityLists.brandName}</span>
          <div className={css.commodityDh12b}>
            <span className={css.commodityDh12b1}>￥{this.state.commodityLists.price}</span>
          </div>
        </div>
        <div className={css.commodityDh13}>
          <a className={css.commodityDh13a}>
            <span className={css.commodityDh13a1}><i className="iconfont icon-ego-menu"></i></span>
          </a>
        </div>
        </div>
      </div>
      <div className={css.commodityDd}>
      {
        <Swiperchildren myswiper={this.props.match.params.myid3} className={css.commodityDd1}/>
      }
        <div className={css.commodityDd2}>
          <div className={css.commodityDd21}>
            <h1 className={css.commodityDd21a}>{this.state.commodityLists.name}</h1>
          </div>
        </div>
      </div>
      
    </div>
  }

 

  componentWillMount(){
    
  }

  
  
  componentDidMount () {
    axios.get(`http://www.mei.com/appapi/product/detail/v3?categoryId=2040204090000006894&productId=${this.props.match.params.myid3}&platform_code=H5&timestamp=1561971477491&summary=e895fd7152ca5232d2530a09fc206419`).then(res=>{
      this.setState({
        commodityLists: res.data.infos,
        // detailListChildren: res.data.products[0].tagListDto[0]
      })
      console.log(res)
    })
    
    window.addEventListener('scroll', this.handleScroll11);
    this.props.hide();
  }

  handleScroll11= ()=>{
   
    this.setState({
      isroll: window.scrollY
    })
    
  }

  

componentWillUnmount() {
  this.props.show();
}
}

const mapDispatchToProps = {
  show:ShowdfqTabbar,
  hide:HidedfqTabbar
}
export default withRouter(connect(null,mapDispatchToProps)(Commodity));