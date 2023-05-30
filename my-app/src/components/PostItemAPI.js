import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
    const filteredPosts = props.post
  return (
    filteredPosts.map(post => {  
        const {id, type, user, webformatURL, tags} = post
        return (
            <div key={id} className={css.SearchItem}>
                <p>Artwork Type: {type}</p>
                <p>Artist: {user}</p>
                <img src={webformatURL} alt={tags} />
                <p>Tags: {tags}</p>
            </div>
        )
    })
  )
}

export default PostItem