import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      }
    }
  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
            {savedPosts.map(post => {
                return (
                    <div className={css.SearchItem}>
                        <p>Title: {post.title}</p>
                        <p>Artist: {post.name}</p>
                        <img src={post.image} alt={post.title} />
                        <p>Description: {post.description}</p>
                    </div>
                )
            })}
        </div>
      </div>
    )
  }
}

export default Content