import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import{ 
    Login,
    Forgot,
    Ressetpassword,
    Dashboard,
    Admin,
    AdminProfile,
    Adminitorter,
    EditAdmin,
    Common,
 } from "../Screens"


const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route exact={true} path="/" component = {Login} />
                <Route exact={true} path="/login" component = {Login} />
                <Route exact={true} path="/forgot" component = {Forgot} />
                <Route exact={true} path="/ressetpassword" component = {Ressetpassword} />
                <Route exact={true} path="/dashboard" component = {Dashboard} />
                <Route exact={true} path="/admin" component = {Admin} />
                <Route exact={true} path="/adminprofile/:_id" component = {AdminProfile} />
                <Route exact={true} path="/editadmin/:_id" component = {EditAdmin} />
                <Route exact={true} path="/adminitorter" component = {Adminitorter} />
                <Route exact={true} path="/common" component = {Common} />
               

            </Switch>
        </Router>
    )

}

export default Routes