import React from 'react'
import css from './index.module.scss'
import { Carousel, WingBlank } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import axios from 'axios'
import Newclearance from '../../Component/Newclearance/index'
import Updatetoday from '../../Component/Updatetoday/index'
import Hotsale from '../../Component/Hotsale/index'
import Liketoread from '../../Component/Liketoread/index'
import store from '../../Redux/store';
class Recommend extends React.Component{
    state = {
        datalist:[],
        list:[],
        imgHeight: 176,
      }
    componentDidMount() {
        
        axios.get('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5').then(res=>{
            // console.log(res.data.banners)
            this.setState({
                datalist:res.data.banners
            })
        })
        axios.get('http://www.mei.com/appapi/home/newZoneEntrance/v3?credential=').then(res=>{
            // console.log(res.data)
            this.setState({
                list:res.data
            })
        })
    }
    render(){
        return(
            <div>
                <div className={css.lunbo}>
                {/* 轮播 */}
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        
                        >
                        {this.state.datalist.map(val => (
                            <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                className='banner'
                                src={val.main_image}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                {/* 新人福利大礼包 */}
                <img src={this.state.list.img} className={css.fuli}></img>
                {/* 每日新品 */}
                <Newclearance></Newclearance>
                {/* 今日上新 */}
                <Updatetoday></Updatetoday>
                 {/* 热卖品牌 */}
                < Hotsale></Hotsale>
                {/* 更多精彩内容 */}
                <Liketoread></Liketoread>
                {
                    this.props.children
                }
               

                </div>
            </div>
        )
    }
}

export default Recommend;