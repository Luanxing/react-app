import React from "react";
import { NavLink} from "react-router-dom";
import axios from 'axios'
import css from "./index.module.scss";
import "../../iconfont/font_1040995_r82qy65tzlr/iconfont.css";
class Headerdfq extends React.Component{
  state = {
    // isceiling: null,
    searchInner: null,
  }
  render () {
    return <div>
      <div className={this.props.scl>0?css.headerA2:css.headerA1}>
        <div className={css.headerB1}>
        <ul className={css.headerB11}>
          <li className={css.loadh}>
              <span className={css.loadh1}>登录</span>
            </li>
          <li className={css.searchDh}>
            <a className={css.searchDh1}>
              <strong className={css.searchDh11}>
                <i className="iconfont icon-fangdajing"></i>
                {this.state.searchInner}
              </strong>
            </a>
          </li>
          <li className={css.shoppingdh}>
            <a className={css.shoppingdh1}>
              <i className="iconfont icon-gouwudai"></i>
            </a>
          </li>
        </ul>
        </div>

        <div className={css.headerB2}>
        <div className={css.headerB21}>
        <ul className={css.headerB211}>
          <li><NavLink to="/recommend" activeClassName={css.myactive} className={css.menudh} replace>推荐</NavLink></li>
          <li><NavLink to="/overseas" activeClassName={css.myactive} className={css.menudh} replace>海外</NavLink></li>
          <li><NavLink to="/ms" activeClassName={css.myactive} className={css.menudh} replace>女士</NavLink></li>
          <li><NavLink to="/men" activeClassName={css.myactive} className={css.menudh} replace>男士</NavLink></li>
          <li><NavLink to="/makeups" activeClassName={css.myactive} className={css.menudh} replace>美妆</NavLink></li>
          <li><NavLink to="/furniture" activeClassName={css.myactive} className={css.menudh} replace>家居</NavLink></li>
          <li><NavLink to="/baby" activeClassName={css.myactive} className={css.menudh} replace>婴童</NavLink></li>
          <li><NavLink to="/comingsoon" activeClassName={css.myactive} className={css.menudh} replace>即将上新</NavLink></li>  
        </ul>
        </div>
        </div>
      </div>  
    </div>
  }

  componentDidMount () {

    axios.get("http://www.mei.com/appapi/search/searchDefault/v3"
    ).then(res=>{
     this.setState({
      searchInner: res.data.words
     })
    })

    // window.addEventListener('scroll', this.handleScroll);
  }
  // handleScroll= ()=>{
  //   console.log(window.scrollY)
  //   this.setState({
  //     isceiling: window.scrollY
  //   })
  //   console.log(this.state.isceiling)
  // }
}

export default Headerdfq;