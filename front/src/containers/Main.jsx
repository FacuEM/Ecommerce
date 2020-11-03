import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import NavbarContainer from "../containers/NavbarContainer"

export default function Main() {
  return (
    <div>
      <NavbarContainer component={NavbarContainer}/>
      <Switch>
      </Switch>
      <Footer component={Footer}/>
    </div>
  )
}
