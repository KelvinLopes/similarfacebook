import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class Post extends Component {
  render() {

    const {  data } = this.props;

    return (
      <div className="container">
        <div className="post">
          <img src={ data.author.avatar } alt="Img-profile"/>
          <div>
            <strong>{data.author.name}</strong>
              <span className="date"> {data.date} </span>
          </div>
          <div className="post-content">
            <p>{data.content}</p>
          </div>
        </div>
       <div>
        {
          data.comments.map(
              comment => (
              <Comment
               key={comment.id}
               data={Comment}
              />)
            )
          }
        </div>
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