import React, {Component} from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      postText: ""
    }
    this.onPostChange = this.onPostChange.bind(this);
  }

  onPostChange (event) {
    this.setState({
      postText: event.target.value
    })
  }

  render() {
    return (
      <form className="bottom-panel d-flex"
      onSubmit={(e) => {e.preventDefault();
        this.props.onAdd(this.state.postText);
        this.setState({postText: ""})}}
      >
        <input
          type="text"
          placeholder="О чем думаете?"
          value={this.state.postText}
          onChange={this.onPostChange}
          className="form-control new-post-label"/>
        <button
          type="submit"
          className="btn btn-outline-secondary">Добавить
        </button>
      </form>
    )
  }
}
