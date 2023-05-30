import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts'
import PostItem from './PostItem'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoaded: false,
        posts: []
      }
    }

getData() {
  console.log('getData() called')
  setTimeout(() => {
      console.log('Data fetched!')
      this.setState({
          isLoaded: true
      })
  }, 2000)
}

componentDidMount() {
  console.log('Component mounted')
  this.fetchImages()
  this.setState({
    posts: savedPosts
  })
}

fetchImages() {
  axios.get('https://pixabay.com/api/?=',{API_KEY})
}

handleChange = (event) => {
  const name = event.target.value.toLowerCase()
  console.log(name)
  const filteredPosts = savedPosts.filter(post => {
      return post.name.toLowerCase().includes(name)
  })
  this.setState({
      posts: filteredPosts
  })

}



  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
              <label
              htmlFor="searchinput"
              >Search:</label>
              <input
              onChange={(event) => this.handleChange(event)}
              type="search"
              id="searchinput"
              ></input>
              <h4>posts found: {this.state.posts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
        {
          this.state.isLoaded ? (
            <PostItem post={this.state.posts} />
            ) : (
              <Loader />
              )
        }

        </div>
        
      </div>
    )
  }
}

export default Content