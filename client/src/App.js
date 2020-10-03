import React,{ Component } from 'react';
import './App.css'
import Navbar from "./components/navbar";
import {Route,Switch} from "react-router-dom";
import Stalls from './components/stalls'
import Stall from "./components/stall";
import AddStall from "./components/add_stall";
import EditStall from "./components/edit_stall";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import {loggedIn} from "./redux/auth/authAction";
import {connect} from 'react-redux'
import PrivateRoute from "./restrict";
import Home from "./components/home";


class App extends Component{
    componentDidMount(){
        const { auth } = this.props
        const token = localStorage.getItem('token')
        if (auth.authenticate && !token) {
            this.props.loggedIn()
        }
    }

  render(){
      return (
          <React.Fragment>
              <Navbar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path="/stalls" component={Stalls}/>
                <PrivateRoute exact path='/stalls/add' component={AddStall} />
                <PrivateRoute exact path='/stalls/edit/:id' component={EditStall} />
                <Route exact path='/stalls/:id' component={Stall}/>
            </Switch>
          </React.Fragment>

    )
  }
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapStateToDispatch = dispatch => ({
    loggedIn: () => dispatch(loggedIn())
})
export default connect(mapStateToProps, mapStateToDispatch)(App)