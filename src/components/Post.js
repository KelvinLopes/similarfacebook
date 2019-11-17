import React, { Component } from 'react';



class Post extends Component {
  render() {

    const {  data } = this.props;

    return (
      <div className="container">
        <div className="post">
          <img src={ data.author.avatar } alt="Img-profile"/>
          <div>
            <strong>{data.author.name}</strong>
              <span> {data.date} </span>
          </div>
          <div className="post-content">
            <p>{data.content}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;