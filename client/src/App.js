import React, { PropTypes } from 'react'
import CommentBox from './component/CommentBox';
import PostBody from './component/PostBody'
class App extends React.Component {
  render () {
    return(
      <div className='redux-hello'>
        <div className='top clearfix' >
          <PostBody />
        </div>
        <div className='bottom clearfix' >
          <CommentBox />
        </div>
      </div>
    )
  }
}

export default App;
