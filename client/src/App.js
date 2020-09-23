import React,{ Component } from 'react';
import './App.css'
import Navbar from "./components/navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Stalls from './components/stalls'
import Stall from "./components/stall";
import AddStall from "./components/add_stall";
import EditStall from "./components/edit_stall";


class App extends Component{

  render(){
      return (
          <Router>
              <Navbar/>
            <Switch>
              <Route exact path="/stalls" component={Stalls}/>
              <Route exact path='/stalls/add' component={AddStall} />
              <Route exact path='/stalls/edit/:id' component={EditStall} />
              <Route exact path='/stalls/:id' component={Stall}/>
            </Switch>
          </Router>

    )
  }
}

export default App;
