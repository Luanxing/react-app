import React from "react";
import axios from 'axios'
import css from "./index.module.scss";
import {HidedfqTabbar,ShowdfqTabbar} from './actionCreator'
import {connect} from 'react-redux'
import "../../iconfont/font_1040995_r82qy65tzlr/iconfont.css";
import { NavLink} from "react-router-dom";
import { PullToRefresh, ListView } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

// import {Route,Redirect,Switch} from 'react-router-dom'
// import Detail1 from './Detail1'
// import Detail2 from './Detail2'
// import Detail3 from './Detail3'
// import Detail4 from './Detail4'

class Detail extends React.Component{
  
  constructor(props) {
    super(props);
      this.state = {
        refreshing: false,
        down: true,
        height:document.documentElement.clientHeight,
        detailLists: [],
        isShowd: true,
        detailListChildren: [],
        pageIndex:2,
        detailLists22: [],
        isroll: null,
        topping: 0,
        keys: null,
        sorts: null,
      }
    }
  render () {
    return <div>
                 
      <div class={css.detaildfq}>
      <div className={css.detailDh}>
        <div className={css.detailDh1}>
          <NavLink to={`/baby`} className={css.detailDh11} replace>
            <i className="iconfont icon-xiangzuo"></i>
          </NavLink>
        </div>
        <div className={css.detailDh2}>
          <span className={css.detailDh21}>
            {this.state.detailLists22[0]}
          </span>
        </div>
        <div className={css.detailDh3}>
        <NavLink to={`/recommend`} className={css.detailDh31} replace>
            <i className="iconfont icon-ego-menu"></i>
          </NavLink>
            {/* <a className={css.detailDh31}>
              <i className="iconfont icon-ego-menu"></i>
            </a> */}
        </div>
      </div>
      <div className={css.detailDK}>
        <div className={css.detailDK1}>
          <ul className={css.detailDK11}>
            {/* <li><NavLink to={`/detail`} onClick={()=>this.handleClickdt1()} activeClassName={css.mydetailactive} className={css.detailMenu} replace>人气</NavLink></li>
            <li><NavLink to={`/detail`} onClick={()=>this.handleClickdt2()} activeClassName={css.mydetailactive} className={css.detailMenu} replace>折扣</NavLink></li>
            <li onClick={()=>this.handleClick()}><NavLink to={`/detail`} onClick={()=>this.state.isShowd? this.handleClickdt3():this.handleClickdt4()} activeClassName={css.mydetailactive} className={css.detailMenu} replace><span className={this.state.isShowd?css.detailMenu1:css.detailMenu2}>价格</span></NavLink></li>
            <li><NavLink to={`/detail`}activeClassName={css.mydetailactive} className={css.detailMenu} replace>筛选</NavLink></li> */}

            <li onClick={()=>this.handleClickdt1()} className={css.detailMenu}>人气</li>
            <li onClick={()=>this.handleClickdt2()} className={css.detailMenu}>折扣</li>
            <li className={css.detailMenu} onClick={()=>this.handleClick()}><span onClick={()=>this.state.isShowd? this.handleClickdt3():this.handleClickdt4()} className={this.state.isShowd?css.detailMenu1:css.detailMenu2}>价格</span></li>
            <li onClick={()=>this.handleClickdt4()} className={css.detailMenu}>筛选</li>
          
          </ul>
          
        </div>
      </div>
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: 'auto',
          overflow: 'auto',
        }}
        indicator=''
       indicator={{activate: ' ', deactivate: ' ', release: ' ', finish: ' ' }}
        direction={'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
           this.setState({ refreshing: false });
           axios.get(`http://www.mei.com/appapi/secondcategory/search/v3?brandNames=&chineseCodes=&pageIndex=${this.state.pageIndex}&categoryId=1000000359&siloId=2013000100000000005&thirdCategories=${this.props.match.params.myid}&key=${this.state.keys}&sort=${this.state.sorts}&timestamp=1561724551807&summary=daeb6b078b13cb595ff6ec289564a62c&platform_code=H5`).then(res=>{
            this.setState({
              detailLists: [...this.state.detailLists,...res.data.products],
              pageIndex: this.state.pageIndex+1
              })
            })
  }}
  >
<div className={css.detailDL}>
    {this.state.detailLists.map(dl=>(
      <div key={dl.productId} className={css.detailDL1}>
        <a className={css.detailDL11}>
          <div className={css.detailDLlist}>
            <img src={dl.imageUrl} className={css.detailDLlist11}/>
          </div>
          <div className={css.detailDLlist2}>
            <div className={css.detailDLlist21}>
              <span className={css.detailDLlist211}>{this.state.detailListChildren.tag}</span>
            </div>
          </div>
          <div className={css.detailDLlist3}>
            <span className={css.detailDLlist31}>{dl.brandName}</span>
            <span className={css.detailDLlist32}>{dl.productName}</span>
          </div>
          <div className={css.detailDLlist4}>
            <div className={css.detailDLlist41}>
              <span className={css.detailDLlist411}>￥{dl.price}</span>
              <del className={css.detailDLlist412}>￥{dl.marketPrice}</del>
            </div>
            <div className={css.detailDLlist42}>{dl.itemPriceDto.discount}折</div>
          </div>
        </a>
      </div>
    ))}
  </div>  
    
  </PullToRefresh>  




                  {/* <Switch>
                    <Route path="/detail/deatail1" component={Detail1} exact/>
                    <Route path="/detail/deatail2" component={Detail2} exact/>
                    <Route path="/detail/deatail3" component={Detail3} exact/>
                    <Route path="/detail/deatail4" component={Detail4} exact/>
                    <Route path="/detail/:myid" component={Detail1} exact/>
                  </Switch>
      {
         this.props.children
         } */}

      <div className={this.state.isroll>100?css.icont:css.icons}>
         <div className={css.icons1}>
            <a className={css.icons11}>
              <img src="data:image/png;base64,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"  className={css.icons11a}/>
            </a>
         </div>
         <div className={css.icons2} onClick={()=>window.scrollTo(0,0)}>
            <img src="data:image/png;base64,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" className={css.icons21}/>
         </div>
      </div>
      </div>  
    </div>
  }

  handleClick () {
    this.setState({
      isShowd:!this.state.isShowd
    })
  }

  // handleClick1 () {
  //   this.setState({
  //     window.scrollTop:topping
  //   })
  // }

  componentWillMount(){
    //隐藏tabbar
    // action 是一个对象， 必须有 type属性
    // store.dispatch(HideTabbar())
    this.props.hide();
  }

  handleClickdt1 () {
  
     axios.get(`http://www.mei.com/appapi/secondcategory/search/v3?brandNames=&chineseCodes=&pageIndex=1&categoryId=1000000359&siloId=2013000100000000005&thirdCategories=${this.props.match.params.myid}&key=&sort=&timestamp=1561948337064&summary=4037794214281346f05c0bbeb30d3738&platform_code=H5`).then(res=>{
      this.setState({
        detailLists: res.data.products,
        detailLists22: res.data.shareContent.shareInfo.trim().split(" "),
        keys:'',
        sorts: '',
        // detailListChildren: res.data.products[0].tagListDto[0]
      })
      // console.log(this.state.detailLists22)
    })
 
  
  }

  handleClickdt2 () {
  
    axios.get(`http://www.mei.com/appapi/secondcategory/search/v3?brandNames=&chineseCodes=&pageIndex=1&categoryId=1000000359&siloId=2013000100000000005&thirdCategories=${this.props.match.params.myid}&key=1&sort=ASC&timestamp=1561785008233&summary=19b285649aefb358de90a99859b3ba31&platform_code=H5`).then(res=>{
      
        
      console.log(this.props)
      this.setState({
        detailLists: res.data.products,
        detailLists22: res.data.shareContent.shareInfo.trim().split(" "),
        keys:1,
        sorts: 'ASC',
        // detailListChildren: res.data.products[0].tagListDto[0]
      })
    })
 

  }

  handleClickdt3 () {
   
    axios.get(`http://www.mei.com/appapi/secondcategory/search/v3?brandNames=&chineseCodes=&pageIndex=1&categoryId=1000000359&siloId=2013000100000000005&thirdCategories=${this.props.match.params.myid}&key=&sort=DESC&timestamp=1561782068834&summary=6ee180c06adbb8aa02a0d511864a660f&platform_code=H5`).then(res=>{
        
          
      console.log(res)
      this.setState({
        detailLists: res.data.products,
        detailLists22: res.data.shareContent.shareInfo.trim().split(" "),
        keys: '',
        sorts: 'DESC',
        // detailListChildren: res.data.products[0].tagListDto[0]
      })
    })
  

  }

  handleClickdt4 () {
   
    axios.get(`http://www.mei.com/appapi/secondcategory/search/v3?brandNames=&chineseCodes=&pageIndex=1&categoryId=1000000359&siloId=2013000100000000005&thirdCategories=${this.props.match.params.myid}&key=&sort=ASC&timestamp=1561782153438&summary=f2f55d19d07e6118b1a8f744e43d41ff&platform_code=H5`).then(res=>{
        
          
        console.log(res)
        this.setState({
          detailLists: res.data.products,
          detailLists22: res.data.shareContent.shareInfo.trim().split(" "),
          keys: '',
          sorts: 'ASC',
          // detailListChildren: res.data.products[0].tagListDto[0]
        })
      })
    
  
  }
  
  componentDidMount () {
    // console.log(this.props.match.params.myid)
    axios.get(`http://www.mei.com/appapi/secondcategory/search/v3?brandNames=&chineseCodes=&pageIndex=1&categoryId=1000000359&siloId=2013000100000000005&thirdCategories=${this.props.match.params.myid}&key=&sort=&timestamp=1561948337064&summary=4037794214281346f05c0bbeb30d3738&platform_code=H5`).then(res=>{
      this.setState({
        detailLists: res.data.products,
        detailLists22: res.data.shareContent.shareInfo.trim().split(" ")
        // detailListChildren: res.data.products[0].tagListDto[0]
      })
      // console.log(this.state.detailLists22)
    })
    
  
  

  
  
    
    window.addEventListener('scroll', this.handleScroll11);

  }

  handleScroll11= ()=>{
    // console.log(window.scrollY)
    this.setState({
      isroll: window.scrollY
    })
    // console.log(this.state.isceiling)
  }

  

componentWillUnmount() {
  // 显示 tabbar
  // store.dispatch(ShowTabbar())
  this.props.show();
}
}

const mapDispatchToProps = {
  show:ShowdfqTabbar,
  hide:HidedfqTabbar
}
export default connect(null,mapDispatchToProps)(Detail);

