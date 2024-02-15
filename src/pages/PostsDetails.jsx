import React from 'react'
import PostAuthor from '../components/PostAuthor'
import {Link} from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'
const PostsDetails = () => {
  return (
    <section className='post-detail'>
      <div className='container post-detail_container'>
        <div className='post-detail_header'>
          <PostAuthor/>
          <div className='post-details_buttons'>
<Link to={`/posts/werwer/edit`}className='btn sm primary'>Edit</Link>
<Link to={`/posts/werwer/delete`}className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post Title!</h1>
        <div className='post-detail_thumbnail'>
        <img src={Thumbnail} alt="" />
        </div>
        <p>
          bdjshbdjhasbdjhbsajdhbeyuweyfuwevfh fhbuf wefebfuhbdb
        </p>
        <p>
          dbjsddbkdksbdkfjsdhifuhiufiuehbfjdfijdhijhfsdihfids
        </p>
        <p>
          dsdhisuhdiushiduhe
        </p>
        <p>njksndkjsd</p>
      </div>
     
    </section>
  )
}

export default PostsDetails