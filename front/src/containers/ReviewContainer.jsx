import React from 'react';
import Review from "../components/Review"
import { connect } from "react-redux"

class ReviewContainer extends React.Component {
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
      <Review/>
      </div>
    );
  }
}

export default connect(null, null)(ReviewContainer);