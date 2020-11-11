import React from 'react';
import ReviewCard from "../components/ReviewCard"
import { connect } from "react-redux";
import {fetchReviews} from "../../redux/actionCreators/reviewCreator"

class ReviewCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        contentname: "",
        stars: 0,
    };
}



render() {
    return (
      <div>
      <ReviewCard 
      review={this.props.reviews}
      user={this.props.user}
      />
      </div>
    );
  }
}

const mapStateToProps = function(state, ownProps) {
  return {
    user: state.isLogged.logged.name  
  };
};

export default connect(mapStateToProps,{ fetchReviews })(ReviewCardContainer);