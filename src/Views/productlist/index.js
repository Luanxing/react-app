import React from 'react'
// import {Route,Redirect,Switch} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
// import Scale from './Scale'
import Popular from './Popular'
// import Price from './Price'
// import Select from './Select'
import Tabbar from '../../component/Tabbar'
import './css/index.css'
// import Detail from './Detail';
class Productlist extends React.Component{

    state = {
       datalist2:[],
       datalist3:[]
       }

    componentDidMount(){
        axios.get(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}`).then(res=>{
            console.log(res.data)
            this.setState({
                datalist2:res.data
            })
        })

        axios.get(`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}`).then(res=>{
            console.log(res.data)
            this.setState({
                datalist3:res.data.eventName
            })
        })
    }

  render(){
    return(
    <div>
        <ul className="navbox1">
            <li><NavLink to="../lifestyle">←</NavLink></li>         
            <li className="nanshou"><p>{this.state.datalist3}</p></li>
             <li>···</li>
        </ul>
        <Tabbar className="tabbar"/>
        <ul className="quanchang">
          <li>
            <span className="manzhe"></span>
          </li>
          <li>满688元全场免运</li>
        </ul>
        {/* {
            this.state.datalist2.map(item=>(
                <p>{item.productName}</p>

                ) )
        } */}
        <Popular {...this.state.datalist2}/>
        
         {/* <Switch>
        <Route path="/productlist/popular" component={Popular}/>
        <Route path="/productlist/scale" component={Scale}/>
        <Route path="/productlist/price" component={Price}/>
        <Route path="/productlist/select" component={Select}/>
        <Route path="/productlist/detail" component={Detail}/>
        </Switch> */}
    </div>
    )
     
  }
  

}

export default Productlist;

