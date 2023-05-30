import React, { Component } from 'react'
import css from './css/Content.module.css'
import PostItem from './PostItemAPI'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoaded: false,
        posts: [],
        savedPosts: []
      }
    }

componentDidMount() {
  console.log('Component mounted')
  this.fetchImages()
}

fetchImages() {
  axios.get('https://pixabay.com/api/?key=' + API_KEY + '&per_page=100')
  .then(response => {
    console.log(response);
    const fetchedPosts = response.data.hits
    this.setState({
      posts: fetchedPosts,
      savedPosts: fetchedPosts,
      isLoaded: true
    })
  })

}

handleChange = (event) => {
  const name = event.target.value.toLowerCase()
  console.log(name)
  const filteredPosts = this.state.savedPosts.filter(post => {
      return post.user.toLowerCase().includes(name)
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