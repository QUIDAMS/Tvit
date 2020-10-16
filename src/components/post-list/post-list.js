import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
  const elements = posts.map((item) => {
    return(
      <li className='list-group-item' key={item.id}>
        <PostListItem
          label={item.label}
          important={item.important}
          onDelete = {() => onDelete(item.id)}
          onToggleImportant={() => onToggleImportant(item.id)}
          onToggleLiked={() => onToggleLiked(item.id)}
          like={item.like}/>
      </li>
    )
  })
  return (
    <ListGroup  className="app-list ">
      {elements}
    </ListGroup >
  )
}

export default PostList;
