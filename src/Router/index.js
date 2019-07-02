
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import App from '../App'
import Recommend from '../Views/Recommend'
import Crossborder from '../Views/Crossborder'
import Women from '../Views/Women'
import Men from '../Views/Men'
import Cosmetics from '../Views/Cosmetics'
import Lifestyle from '../Views/Lifestyle'
import Kids from '../Views/Kids'
import Upcoming from '../Views/Upcoming'
import Detail from '../Views/Detail/index'
import React from 'react' 
import {Provider} from 'react-redux'
import store from '../Redux/store'
import Person from '../Views/Detail/Person/index'
import Discount from '../Views/Detail/Discount/index'
import Choose from '../Views/Detail/Choose/index'
import Price from '../Views/Detail/Price/index'

const router = (
    //引入Provider，传进store,使所有的容器组件拿到store
    <Provider store={store}>
    <Router>
        <App> 
            <Switch>
            <Route path="/recommend" component={Recommend}/>
            <Route path="/crossborder" component={Crossborder}/>
            <Route path="/women" component={Women}/>
            <Route path="/men" component={Men}/>
            <Route path="/cosmetics" component={Cosmetics}/>
            <Route path="/Lifestyle" component={Lifestyle}/>
            <Route path="/kids" component={Kids}/>
            <Route path="/Upcoming" component={Upcoming}/>
            <Route path="/detail/:id" component={Detail}/>
            </Switch>
        </App>
    </Router>
    </Provider>
)

export default router;