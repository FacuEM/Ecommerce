import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import NavbarContainer from "../containers/NavbarContainer"
import CategoriasContainer from "../containers/CategoriasContainer"
import RegisterContainer from "../containers/RegisterContainer"
import CarContainer from "../containers/carContainer"

export default function Main() {
  return (
    <div>
      <NavbarContainer component={NavbarContainer}/>
      <Switch>
        <Route exact path="/" component={CategoriasContainer}/>
        <Route path="/register" component={RegisterContainer}/>
        <Route path="/car" component={CarContainer}/>
      </Switch>
      <Footer component={Footer}/>
    </div>
  )
}
