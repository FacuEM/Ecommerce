import React from 'react';
import Footer from '../components/Footer';
import { connect } from "react-redux"

class FooterContainer extends React.Component {
  constructor() {
    super();
    this.state = {
        
    };
} 

render() {
    return (
      <div>
      <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);