import React from 'react';
import { connect } from "react-redux"
import {fetchOrder} from "../../redux/actionCreators/car"

class CarContainer extends React.Component {
  constructor() {
    super();
    
    } 

    componentDidMount(){
        this.props.fetchOrder(this.props.user.id)
    }

render() {
    console.log(this.props.order)
    return (
      <div>
        <h1>user container</h1>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
      order:state.car.order,
      user:state.isLogged.logged
  };
};

const mapDispatchToProps = function(dispatch){
  return {
    fetchOrder:(userid)=>dispatch(fetchOrder(userid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);