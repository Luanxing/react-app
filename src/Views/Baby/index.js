import React from "react";
// import { Route,Redirect,Switch } from "react-router-dom";
import axios from 'axios'
// import Headerdfq from '../../Components/Headerdfq'
import Swiperdfq from '../../Components/Swiperdfq'
import Productdfq from "../../Components/Productdfq";
import css from "./index.module.scss";
import { PullToRefresh, ListView } from 'antd-mobile';
import ReactDOM from 'react-dom';
// import Footerdfq from "../../Components/Footerdfq";
class Baby extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height:document.documentElement.clientHeight,
      productdfqList: [],
      productdfqList2: [],
      babylist: [],
      // isceiling: null,
    };
  }
  
  render () {
    return <div>
        {/* {
          <Headerdfq scl={this.state.isceiling}/>
          
        } */}
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
          setTimeout(() => {
            this.setState({
               refreshing: false,
               productdfqList: [...this.state.productdfqList,...this.state.productdfqList2]
               });
          }, 1000);
          console.log(this.state.productdfqList)
        }}
      >
         
        {
          <Swiperdfq/>
        }
       <div className={css.babyDh}>
        <div className={css.babyDh1}>
          <ul className={css.babyDh11}>
            {this.state.babylist.map(hl=>(
              <li key={hl.categoryTwoId} className={css.babyDhaa}>
                <img src={hl.categoryImgStr} className={css.babyDhaa1}/>
              </li>
            ))}
          </ul>
        </div>
       </div>
       {
         <Productdfq pdt={this.state.productdfqList}/>
       }
       </PullToRefresh>
       {/* {
         <Footerdfq/>
       } */}
    </div>
  }

  componentDidMount () {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    axios.get("http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000005&ids=2120000100000000146&timestamp=1561540680398&summary=6451ca13e181f05beac56e539808a565&platform_code=H5"
    ).then(res=>{
      // console.log(res.data.resultList)
      this.setState({
        babylist: res.data.resultList[0].data
        
      })
    })

    axios.get('http://www.mei.com/appapi/silo/eventForH5?categoryId=kids&pageIndex=1&timestamp=1561545276676&summary=e90c2ebf688d76a00688c17a79e13f95&platform_code=H5').then(res=>{
      console.log(res.data.eventList)
      this.setState({
        productdfqList: res.data.eventList
      })
    })
    axios.get('http://www.mei.com/appapi/silo/eventForH5?categoryId=kids&pageIndex=2&timestamp=1561553606715&summary=6c03ee1cba1cb0a143511c748d9eed2b&platform_code=H5').then(res=>{
      console.log(res.data.eventList)
      this.setState({
        productdfqList2: res.data.eventList
      })
    })
    

    setTimeout(() => this.setState({
      height: hei,
      
    }), 0);


    // window.addEventListener('scroll', this.handleScroll);
  }
  // handleScroll= ()=>{
  //   // console.log(window.scrollY)
  //   this.setState({
  //     isceiling: window.scrollY
  //   })
  //   // console.log(this.state.isceiling)
  // }
}

export default Baby;