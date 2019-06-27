import React from "react";
// import { Route,Redirect,Switch } from "react-router-dom";
import axios from 'axios'
import { Carousel, WingBlank, Pagination } from 'antd-mobile';
import css from "./index.module.scss";


class Swiperdfq extends React.Component {
  state = {
    dataList: [],
    imgHeight: 100,
  }
  componentDidMount() {
    axios.get("http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000005&platform_code=PLATEFORM_H5").then(res=>{
        this.setState({
          dataList: res.data.banners
        })
      })
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn'],
      });
    }, 100);
  }
  render() {
    return (
      <div>
      <WingBlank>
        <Carousel
          dots={true}
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
          dotStyle={{position: 'absolute',
            textAlign: 'center',
            transition: '.3s',
            transform: 'translateZ(0)',
            zIndex: '10'}}   
        >
          {this.state.dataList.map(val => (
            <a
              key={val.id}
              href="http://www.alipay.com"
              style={{ textDecoration: 'none',display: 'inline-block', width: '100%', height: this.state.imgHeight,}}
            >
              <img
                src={val.main_image}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                  // console.log(this.state.dataList)
                }}
              />
              <div className={css.swiperD}>
                <p className={css.swiperDh}>{val.main_title}</p>
                <p className={css.swiperDh1}>{val.sub_title}</p>
                <p className={css.swiperDh2}>{val.description}</p>
              </div>
              <div className="pagination-container" >
                  <Pagination mode="pointer" total={2} current={1} style={{ marginBottom: '16px' }} />
              </div>
            </a>
            
          ))}
        </Carousel>
      </WingBlank>
      </div>
    )
  }
}

// ReactDOM.render(<Swiperdfq />, mountNode);
// class Swiperdfq extends React.Component{
//   state = {
//     swiperdfqList: []
//   }

//   render () {
//     return <div>
      
//     </div>
//   }

//   componentDidMount () {
//     axios.get("http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000005&platform_code=PLATEFORM_H5").then(res=>{
//         this.setState({
//           swiperdfqList: res.data.banners
//         })
//       })
//   }
      
// }

export default Swiperdfq;