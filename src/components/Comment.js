import React from 'react';
import PropTypes from 'prop-types';

//Imports from icons input answer
import emoji from '../assets/emoji.svg';
import cam from '../assets/cam.svg';
import gif from '../assets/gif.svg';

function comment({ author, content }) {
  return (
       <div className="comments">
         <img src={ author.avatar } alt="Img-profile"/>
       <div className="post-comment">
       <div className="content-post">
         <p> 
           <span className="name-comment"><strong>{ author.name }</strong></span>
            { content }
         </p>
       </div>
       <nav>
           <ul>
             <li>Curtir</li>
             <li>.Responder</li>
           </ul>
         </nav>
     </div>
     <div className="answer">
       <span><img src={ author.myAvatar } alt="Img-profile"/></span>
       <span> <input type ="text" placeholder="Escreva um comentário..."/> </span>
       <div className="icons-input">
       <nav>
            <ul>
              <li><img className="emoji" src={emoji} alt="Button Emoji"/></li>
              <li><img className="cam" src={cam} alt="Button Cam"/></li>
              <li><img className="gif" src={gif} alt="Button Gif"/></li>
            </ul>
          </nav>
       </div>
      </div>
     </div>
   );
}

comment.defaultProps = {
  author: {
    name: 'A user',
    avatar: require('../assets/Perfil.jpg')
  },
  content: 'A post'
}


comment.proptypes = {
  content: PropTypes.string,
  author: PropTypes.object
}

export default comment;