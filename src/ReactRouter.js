import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

const ReactRouter = () => (
    <Switch>
        <Route path="/home">
            <div>
                home
            </div>
        </Route>
        <Route path="/user">
            <div>
                user
            </div>
        </Route>
        <Redirect to="/home"/>
    </Switch>
)


export default ReactRouter