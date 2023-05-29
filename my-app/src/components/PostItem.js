import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
    const filteredPosts = props.post
  return (
    filteredPosts.map(post => {  
        const {name, title, description, image} = post
        return (
            <div key={title} className={css.SearchItem}>
                <p>Title: {title}</p>
                <p>Artist: {name}</p>
                <img src={image} alt={title} />
                <p>Description: {description}</p>
            </div>
        )
    })
  )
}

export default PostItem