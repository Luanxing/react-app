import React from "react";
// import { Route,Redirect,Switch } from "react-router-dom";
import axios from 'axios'
import { Carousel, WingBlank} from 'antd-mobile';
import css from "./index.module.scss";
import 'antd-mobile/dist/antd-mobile.css';


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
        <Carousel
          dots={true}
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
          dotStyle={{
              position: 'relative',
              bottom: '.906667rem',
              width: '.133333rem',
              height: '.133333rem',
              borderRadius: '0',
              background: '#fff',
              opacity: '.5',
            }}
          dotActiveStyle={{
            position: 'relative',
            bottom: '.906667rem',
            width: '.4rem',
            height: '.133333rem',
            borderRadius: '0',
            background: '#fff',
            opacity: '1',
        }}  
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
            </a>
            
          ))}
        </Carousel>
      </div>
    )
  }
}


export default Swiperdfq;