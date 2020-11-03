import React from 'react';
import Categorias from '../components/Categorias';
import { connect } from "react-redux"

class CategoriasContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
} 

//Lógica del Navbar y del carrito

render() {
    return (
      <div>
      <Categorias/>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {};
};

const mapDispatchToProps = function(dispatch){
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriasContainer);