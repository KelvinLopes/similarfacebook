import React from 'react';
import PropTypes from 'prop-types';

function comment({ author, content }) {
  return (
    <div className="container">
       <div className="comments">
         <img src={ author.avatar } alt="Img-profile"/>
       </div>
       <div className="post-comment">
           <span><strong>{ author.name }</strong></span>
       </div>
       <div className="content-post">
         <p> { content }</p>
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