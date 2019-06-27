import { HashRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import App from "../App";
import Comingsoon from "../Views/Comingsoon";
import Baby from "../Views/Baby";
import Furniture from "../Views/Furniture";
import Makeups from "../Views/Makeups";
import Men from "../Views/Men";
import Ms from "../Views/Ms";
import Overseas from "../Views/Overseas";
import Recommend from "../Views/Recommend";
import React from "react";

const router = (
  <Router>
    <App>
      <Switch>
        <Route path="/comingsoon" component={Comingsoon}/>
        <Route path="/baby" component={Baby}/>
        <Route path="/furniture" component={Furniture}/>
        <Route path="/makeups" component={Makeups}/>
        <Route path="/men" component={Men}/>
        <Route path="/ms" component={Ms}/>
        <Route path="/overseas" component={Overseas}/>
        <Route path="/recommend" component={Recommend}/>
        <Redirect from="/" to="/baby"/>
      </Switch>
    </App>
  </Router>
)

export default router;