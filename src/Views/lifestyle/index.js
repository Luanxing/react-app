import React from 'react'
import {NavLink} from 'react-router-dom'
import './css/index.css'
import axios from 'axios'
import { Carousel, WingBlank } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import Navbar from '../../component/Navbar';
import store from '../../Redux/store'
import {getPromiseList} from './actionCreater'
import '../../assest/fonts/iconfont.css'
class App extends React.Component{
    state = {
     data:["1","2"],
     imgHeight:496,
    datalist:[],
    shoplist:[]
    }
     componentWillMount(){

      if(store.getState().list.length===0){
        store.dispatch(getPromiseList()).then(res=>{
          this.setState({
            shoplist:res.payload
          })
        });
        
      }else{
        console.log("使用缓存",store.getState().list)
        this.setState({
          shoplist:store.getState().list
     })
      }
      
     }
    componentDidMount(){
        axios.get("http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000004&platform_code=PLATEFORM_H5").then(res=>{
            console.log(res.data.banners)
            this.setState({
                datalist:res.data.banners
            })
        })  

        // axios.get("http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=1&timestamp=1561528937870&summary=ce7fa86a960dd241563eda999a8b6d63&platform_code=H5").then(res=>{
        //     console.log(res.data.eventList)
        //     this.setState({
        //          shoplist:res.data.eventList
        //     })
        // })
        setTimeout(() => {
            this.setState({
              data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn'],
            });
          }, 100);
   
        }
          
        render(){
          
            return(
             <div>
               <div className="box1">
                <ul className="head">
                    <li><span className="login">登录</span></li>
                    <li className="outlinewidths"><input className="search" placeholder="阿玛尼"/></li>
                    <li className="shopbag iconfont">&#xe600;</li>  
                </ul>
                <div className="menulist1">
                  <ul>
                    <li> {this.props.children}</li>
                  </ul>
                  <Navbar/>
                </div>
              </div>
                {/* 轮播 */}
            
              <Carousel className="lunbo"
               autoplay={true}
               infinite  
               >
                {this.state.datalist.map(val => (
                 <a
                key={val.id}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                <img className="banner"
                src={val.main_image}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
              <p className="carouseldiscusion">
                <span className="insidespan">{val.main_title}</span><br/>
                {val.sub_title}<br/>
                {val.description}
              </p>
            </a>
          ))}
        </Carousel>
      
      <a href="http://www.mei.com/silo/lifestyle/2042204290000004652-null-event.html"> <img className="miniimg" src="https://cdn13.mei.com/category/20180621/a789fab3fbc384262a0a542c5ae8ca0ae15d3cf3671d4998.jpg"/></a>
        <ul>
          <li className="listbox">
            {this.state.shoplist.map(event =>(
                <a
                key={event.id}
                onClick={()=>
                  this.handleClick(event.categoryId)}
              >  
             <img className="products"
                src={event.imageUrl}
                /> 
                <div className="disscution">
                <p><span className="engname">{event.englishName}</span><br/>
                {event.chineseName}<br/>
                {event.discountText}</p>
                </div>      
            </a>
            ))}
          </li>
        </ul>
        <div className="bottombox">
          <p className="tel">400-664-6698</p>
          <ul className="bottomnav">
            <li>首页</li>
            <li>|</li>
            <li>客户端</li>
            <li>|</li>
            <li>登陆</li>
            <li>|</li>
            <li>注册</li>
          </ul>
          <p className="tel">浙ICP备16004860号-1</p>
        </div>         
   </div>
         )
        }
        handleClick =(id) =>{
          console.log(this.props)
          this.props.history.push(`/productlist/${id}`)
        }
    }


 



export default App;
