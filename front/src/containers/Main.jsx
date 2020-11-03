import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import NavbarContainer from "../containers/NavbarContainer"
import CategoriasContainer from "../containers/CategoriasContainer"

export default function Main() {
  return (
    <div>
      <NavbarContainer component={NavbarContainer}/>
      <Switch>
        <Route exact path="/" component={CategoriasContainer}/>
      </Switch>
      <Footer component={Footer}/>
    </div>
  )
}
