import React from "react";
// import ReactDOM from 'react-dom';
// import { Route,Redirect,Switch } from "react-router-dom";
import css from "./index.module.scss";
// import { PullToRefresh } from 'antd-mobile';
import {withRouter} from 'react-router'
class Productdfq extends React.Component {

  render() {
    return (<div>
       <div className={css.productDh}>
          {this.props.pdt.map(pl=>(
            <div key={pl.eventCode} className={css.productDh1} onClick={()=>this.handleClickpdt(pl.eventId)}>
              <a className={css.productDh11}>
                <img src={pl.imageUrl} className={css.productDhaa}/>
                <div className={css.productDhab}>
                  <div className={css.productDhab1}>
                    <span className={css.productDhab11}>{pl.englishName}</span>
                    <span className={css.productDhab12}>{pl.chineseName}</span>
                    <span className={css.productDhab12}>{pl.discountText}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
    </div>);
  }
  handleClickpdt = (id)=>{
    console.log(id) // 父组件传来的属性
    this.props.history.push(`/detailtwo/${id}`);
    // this.props.history.push({pathname:`/detail/${id}`})

  }

}
// export default Productdfq;
export default withRouter(Productdfq);