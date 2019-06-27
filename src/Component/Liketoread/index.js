import React from 'react'
import axios from 'axios'
import css from './index.module.scss'

class Liketoread extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <h2 className={css.more}>更多精彩内容</h2>
                    <li className={css.pinpai1}></li>
                    <li className={css.pinpai2}></li>
                </ul>
               

            </div>
        )
    }
    componentDidMount(){
        axios.get('').then(res=>{
            console.log(res)
        })
    }
}
export default Liketoread