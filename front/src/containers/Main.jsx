import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import NavbarContainer from "../containers/NavbarContainer"
import RegisterContainer from "../containers/RegisterContainer"
import CategoriesContainer from './CategoriesContainer';

export default function Main() {
  return (
    <div>
      <NavbarContainer component={NavbarContainer}/>
      <Switch>
        <Route exact path="/" component={CategoriesContainer}/>
        <Route path="/register" component={RegisterContainer}/>
      </Switch>
      <Footer component={Footer}/>
    </div>
  )
}
