import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
  render() {
    const {label, onDelete, onToggleLiked, onToggleImportant, important, like} = this.props;
    let classNames = 'app-list-item d-flex justify-content-between';
      if (important) {  //по умолчанию important = true
        classNames +=' important';
      }
      if (like) {
        classNames +=' like';
      }
    return (
      <div className={classNames}>
        <span className="app-list-item-label"
              onClick={onToggleLiked}>{label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-star btn-sm"
                  onClick={onToggleImportant}
                  type="button">
            <i className="fa fa-star"></i>
          </button>
          <button className="btn-trash btn-sm"
                  onClick={onDelete}
                  type="button">
            <i className="fa fa-trash"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    )
  }
}
