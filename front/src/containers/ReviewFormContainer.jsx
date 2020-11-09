import React, {Component} from "react";
import {connect} from 'react-redux';
import ReviewForm from '../components/ReviewForm'
import {addReview} from '../../redux/actionCreators/reviewCreator'

class ReviewFormContainer extends Component {
  constructor(){
    super()
    this.state = {
      content: '',
      stars: null,
      value: ''
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSelect(evt) {
    const value = evt.target.value; 
    this.setState({value, stars: Number(value)})
  }

  handleInput(evt) {
    const value = evt.target.value;
    this.setState({value, content: value})
  }

  handleSubmit(evt){
    evt.preventDefault()
    this.props.addReview(this.props.id, {content: this.state.content, stars: this.state.stars});
    this.setState({content: '', stars: null})
  }

render(){

return (
<div>
    <ReviewForm handleSelect={this.handleSelect} handleInput={this.handleInput} handleSubmit={this.handleSubmit} stars={this.state.stars} content={this.state.content} />
</div>
);
}}



export default connect(null, { addReview })(ReviewFormContainer);