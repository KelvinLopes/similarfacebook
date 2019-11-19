import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';


// Imports from icons
import like from '../assets/like.svg';
import comment from'../assets/comment.svg';
import share from '../assets/share.svg';
import editIcon from '../assets/edit.svg';

class Post extends Component {
  render() {

    const {  data } = this.props;

    return (
 
        <div className="post">
          <span className="edit"><img src={editIcon} alt="Edit Icon Post"/></span>
          <img className="avatar-post" src={ data.author.avatar } alt="Img-profile"/>
          <div className="name-author">
            <span ><strong>{data.author.name}</strong></span>
            </div>
            <div className="date">
            <span><strong>{data.date}</strong></span>
          </div>
          <div className="post-content">
            <p>{data.content}</p>
          </div>
          <nav className="actions">
            <ul>
              <li><img src={like} alt="Button Like"/> Curtir</li>
              <li><img src={comment} alt="Button Comment"/> Comentar</li>
              <li><img src={share} alt="Button Share"/>  Compartilhar</li>
            </ul>
          </nav>
       <div>
       </div>
        {
          data.comments.map(
              comment => (
              <Comment
               key={comment.id}
               avatar = {comment.avatar}
               author= {comment.author}
               content={comment.content}
              />)
            )
          }
        </div>

    );
  };
}


Post.defaultProps = {
  date: ' DD/MM/YYYY',
  author: {
    name: 'A user',
    avatar: require('../assets/Perfil.jpg')
  },
  content: 'A post',
}


Post.proptypes = {
  author: PropTypes.object,
  content: PropTypes.string,
  date: PropTypes.string,
}

export default Post;