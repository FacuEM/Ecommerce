import React from 'react';
import ReviewCard from "../components/ReviewCard"
import { connect } from "react-redux";


class ReviewCardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
        contentname: "",
        stars: 0,
    };
    
}

render() {
    return (
      <div>
      <ReviewCard review={this.props.reviews}/>
      </div>
    );
  }
}

const mapStateToProps = function(state, ownProps) {
  return {
    reviews: state.reviews.reviews
  };
};

export default connect(mapStateToProps,null)(ReviewCardContainer);