import React, { Component } from 'react';
import Post from './Post';


class PostList extends Component {

    state = {
      posts: [
        {
          id: 1,
          author: {
            name: "Teste",
            avatar: "http://url-da-imagem.com/imagem.jpg"
          },
          date: "Hoje",
          content: "Em de oportunidades",
          comments: [
            {
              id: 1,
              author: {
                name: "Teste2",
                avatar: "http://url-da-imagem.com/imagem.jpg"
              },
              content: "Temos uma otima oportunidade para você!"
            }
          ]
        },
        {
          id: 2,
          author: {
            name: "Teste",
            avatar: "http://url-da-imagem.com/imagem.jpg"
          },
          date: "Hoje",
          content: "Eu também busco por de oportunidades",
        },
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