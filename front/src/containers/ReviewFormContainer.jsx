import React, {Component} from "react";
import {connect} from 'react-redux';
import ReviewForm from '../components/ReviewForm'
import {addReview} from '../../redux/actionCreators/reviewCreator'
import {fetchReviews} from '../../redux/actionCreators/reviewCreator'
import ReviewCardContainer from "./ReviewCardContainer"

class ReviewFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      content: '',
      stars: 0,
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSelect(evt) {
    const value = evt.target.value; 
    this.setState({stars: value})
  }

  handleInput(evt) {
    const value = evt.target.value;
    this.setState({content: value})
  }

  handleSubmit(evt){
    evt.preventDefault()
    this.props.addReview(this.props.id, {content: this.state.content, stars: this.state.stars})
    this.setState({content: '', stars: 0})
    }

  componentDidMount(){
    this.props.fetchReviews(Number(this.props.id))
  }

render(){
return (
<div>
{this.props.user ? 
    <ReviewForm handleSelect={this.handleSelect} 
    handleInput={this.handleInput} 
    handleSubmit={this.handleSubmit} 
    stars={this.state.stars} 
    content={this.state.content}
    />
:
null
}
<ReviewCardContainer 
reviews={this.props.reviews}
/>
</div>
);
}}

const mapStateToProps = function(state, ownProps) {
  return {
    user: state.isLogged.logged.name,
    history: ownProps.history,
    reviews: state.reviews.reviews
  };
};

export default connect(mapStateToProps, { addReview, fetchReviews })(ReviewFormContainer);