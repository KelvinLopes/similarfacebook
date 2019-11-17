import React, { Component } from 'react';
import Post from './Post';


class PostList extends Component {

    state = {
      posts: [
        {
          id: 1,
          author: {
            name: "",
            avatar: ""
          },
          date: "",
          content: "",
          comments: [
            {
              id: 1,
              author: {
                name: "",
                avatar: ""
              },
              content: ""
            }
          ]
        },
        {
          id: 2,
          author: {
            name: "",
            avatar: ""
          },
          date: "",
          content: "",
        }
      ]
    };
  
  render() {
    return (
      <div className="container">
        <div className="postlist">
        {this.state.posts.map(post =>
           <Post key={post.id} data={post} />)}
        </div>
      </div>
    )
  }
}

export default PostList;