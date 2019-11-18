import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {

    state = {
      posts: [
        {
          id: 1,
          author: {
            name: "Teste",
            avatar: require("../assets/Perfil.jpg")
          },
          date: "17 nov 2019",
          content: "Em de oportunidades",
          comments: [
            {
              id: 1,
              author: {
                name: "Teste2",
                avatar: require("../assets/Perfil.jpg")
              },
              content: "Temos uma otima oportunidade para você!"
            }
          ]
        },
        {
          id: 2,
          author: {
            name: "Teste",
            avatar: require("../assets/Perfil.jpg")
          },
          date: "17 nov 2019",
          content: "Eu também busco por de oportunidades",
          comments: [
            {
              id: 1,
              author: {
                name: "Teste2",
                avatar: require("../assets/Perfil.jpg")
              },
              content: "Temos uma otima oportunidade para você!"
            }
          ]
        },
      ]
    };
  
  render() {
    return (
      <div className="container">
        <div className="postlist">
        {
          this.state.posts.map(post => (
            <Post 
              key={ post.id }
              data={post } 
            />
              )
            )
          } 
        </div>
      </div>
    )
  }
}

export default PostList;