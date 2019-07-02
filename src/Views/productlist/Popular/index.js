import React from 'react'
import axios from 'axios'
import './css/index.css'
import Detail from '../Detail'
import {Route,Redirect,Switch} from 'react-router-dom'
class Popular extends React.Component{

  state = {
    datalist3:[]
  }

  render(){
    console.log(this.props.products)
    return<div>
    
        {
          this.props.products?
          <div className="bigbox">
                    {
            this.props.products.map(item=>(
                <a className="listbox2">
                  <div>
                  <img className="listname" src={item.imageUrl}/>
                  </div>
                  <div>
                    <span className="brandname">{item.brandName}</span><br/>
                    <span className="productname">{item.productName}</span>
                 </div>
                  <div>
                    <div>
                      <span className="price">¥{item.price}</span>&nbsp;&nbsp;
                      <del className="marketprice">¥{item.marketPrice}</del>
                      <span className="discount">{item.discount}折</span>
                    </div>
                    
                  </div>
                </a>

                ) )
        }
          </div>
          :null
        }
        {/* <Switch>
    <Route path="/productlist/detail" component={Detail}/>
    </Switch> */}
    </div>
  }
}


export default Popular; 