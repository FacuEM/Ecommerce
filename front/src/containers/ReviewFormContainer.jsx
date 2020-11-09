import React, {Component} from "react";
import {connect} from 'react-redux';
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
<form onSubmit={this.handleSubmit}>
  <select value={this.state.stars} onChange={this.handleSelect}>
  <option value='1'>1</option>
  <option value='2'>2</option>
  <option value='3'>3</option>
  <option value='4'>4</option>
  <option value='5'>5</option>
  </select>
  <input value={this.state.content} onChange={this.handleInput}></input>
  <button>Submit</button>
 
</form>
</div>
);
}}

/* const mapStateToProps = function(state, ownProps) {
  return {
  id: ownProps.match.params.id,
   
  };
}; */


export default connect(null, { addReview })(ReviewFormContainer);