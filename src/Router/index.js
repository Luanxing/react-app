import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import App from '../App'
import Cosmetics from '../Views/Cosmetics'
import Crossborder from '../Views/Crossborder'
import Kids from '../Views/Kids'
import Man from '../Views/Man'
import Tuijian from '../Views/Tuijian'
import Upcoming from '../Views/Upcoming'
import Woman from '../Views/Woman'
import lifestyle from '../Views/lifestyle'
import React from 'react'
import productlist from '../Views/productlist';

const router = 
<Router>
    <App>
        <Switch>
        <Route path="/kids" component={Kids}/>
        <Route path="/man" component={Man}/>
        <Route path="/cosmetics" component={Cosmetics}/>
        <Route path="/crossborder" component={Crossborder}/>
        <Route path="/tuijian" component={Tuijian}/>
        <Route path="/coming" component={Upcoming}/>
        <Route path="/woman" component={Woman}/>
        <Route path="/lifestyle" component={lifestyle}/>
        <Route path="/productlist/:id" component={productlist}/>
        
        <Redirect from="/" to="/lifestyle"/>
        </Switch>
    </App>
</Router>

export default router;