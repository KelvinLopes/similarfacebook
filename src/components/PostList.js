import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {

    state = {
      posts: [
        {
          id: 1,
          author: {
            name: "Kelvin Lopes",
            avatar: require("../assets/Perfil.jpg")
          },
          date: "17 nov 2019",
          content: "Procuro por oportunidades usando a stack: ReactJS, React Native e NodeJS.",
          comments: [
            {
              id: 1,
              author: {
                name: "Nathalia",
                avatar: require("../assets/avatar2.svg"),
                myAvatar: require("../assets/Perfil.jpg")
              },
              content: " Bom saber, vou entrar em contato logo logo 🙂",
            }
          ]
        },
        {
          id: 2,
          author: {
            name: "Erick",
            avatar: require("../assets/avatar3.svg")
          },
          date: "17 nov 2019",
          content: "Essa stack é realmente sensacional!",
          comments: [
            {
              id: 1,
              author: {
                name: "Deise",
                avatar: require("../assets/avatar4.svg"),
                myAvatar: require("../assets/Perfil.jpg")
              },
              content: "Eu concordo! Vejo infinitas possibilidades com ela."
            }
          ]
        },
        {
          id: 3,
          author: {
            name: "Deise",
            avatar: require("../assets/avatar4.svg"),
            myAvatar: require("../assets/Perfil.jpg")
          },
          date: "18 nov 2019",
          content: "Por falar nisso, vamos desenvolver algo hoje!",
          comments: [
            {
              id: 1,
              author: {
                name: "Kelvin",
                avatar: require("../assets/Perfil.jpg"),
                myAvatar: require("../assets/Perfil.jpg")
              },
              content: "Gostei da ideia, vamos definir um projeto 🚀"
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
              data={ post }
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