import React from "react";
// import { Route,Redirect,Switch } from "react-router-dom";
import axios from 'axios'
import { Carousel, WingBlank} from 'antd-mobile';
import css from "./index.module.scss";
import 'antd-mobile/dist/antd-mobile.css';


class Swiperchildren extends React.Component {
  state = {
    dataList: [],
  }
  componentDidMount() {
    axios.get(`http://www.mei.com/appapi/product/detail/v3?categoryId=2040204090000006894&productId=${this.props.myswiper}&platform_code=H5&timestamp=1561971477491&summary=e895fd7152ca5232d2530a09fc206419`).then(res=>{
        this.setState({
          dataList: res.data.infos.images
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
              background: '#000',
              opacity: '.5',
            }}
          dotActiveStyle={{
            position: 'relative',
            bottom: '.906667rem',
            width: '.4rem',
            height: '.133333rem',
            borderRadius: '0',
            background: '#000',
            opacity: '1',
        }}  
        >
          {this.state.dataList.map(val => (
            <a
              key={val.id}
              href="http://www.alipay.com"
              style={{ 
                textDecoration: 'none',
                display: 'inline-block',
                height: '11.9067rem',
                opacity: '1',
                width: '8.933333rem',
                margin: '0 .533333rem .666667rem',
                top: '1.173333rem', 
                 position: 'relative',
                 overflow: 'hidden',
                 zIndex: '1',
                 boxShadow: '0 0.013333rem 0.133333rem 0.066667rem rgba(0,0,0,.05)',

                }}
            >
              <img
                src={val.bigImgUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' ,    display: 'block',
                height: '100%',
            }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                  // console.log(this.state.dataList)
                }}
              />
              {/* <div className={css.swiperD}>
                <p className={css.swiperDh}>{val.main_title}</p>
                <p className={css.swiperDh1}>{val.sub_title}</p>
                <p className={css.swiperDh2}>{val.description}</p>
              </div> */}
            </a>
            
          ))}
        </Carousel>
      </div>
    )
  }
}


export default Swiperchildren;