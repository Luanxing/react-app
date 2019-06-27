import React from 'react'
import css from './index.module.scss'
import axios from 'axios'
class Newclearance extends React.Component{
    state={
        datalist:[],
        datalist1:[],
        datalist2:[],
        datalist3:[],
        datalist4:[],
        datalist5:[]
    }
    render(){
        return(
            <div>
              <ul className={css.ul2}>
                  <li className={css.zhuti}>{this.state.datalist.main_title}     {this.state.datalist.sub_title}</li>   
                  <li className={css.zhuti1} ><img className={css.img1}src={this.state.datalist1.picUrl}></img></li> 
                  <li className={css.jingxuan} >{this.state.datalist1.tag}</li> 
                  <li className={css.zhuti2} ><img className={css.img2}src={this.state.datalist2.picUrl}></img></li>
                  <li className={css.jingxuan1} >{this.state.datalist1.tag}</li> 
              </ul>
              <ul className={css.ul3}>
                 <li className={css.qingcang}>{this.state.datalist3.main_title}   {this.state.datalist3.sub_title}</li>
                 <li className={css.qingcang1}><img  className={css.img3} src={this.state.datalist4.picUrl}></img></li> 
                 <li className={css.zhijiang} >{this.state.datalist4.tag}</li> 
                 <li className={css.qingcang2} ><img className={css.img4} src={this.state.datalist5.picUrl}></img></li>
                 <li className={css.zhijiang1} >{this.state.datalist5.tag}</li>
              </ul>
               

            </div>
        )
    }
    componentDidMount(){
        axios.get('http://www.mei.com/appapi/ninenew/operational/v1?credential=').then(res=>{
            // console.log(res.data.show2[1])
          
            this.setState({
                datalist:res.data.show2[0],
                datalist1:res.data.show2[0].products[0],
                datalist2:res.data.show2[0].products[1],
                datalist3:res.data.show2[1],
                datalist4:res.data.show2[1].products[0],
                datalist5:res.data.show2[1].products[1]
            })
         
        })
    }
}
export default Newclearance