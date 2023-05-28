import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

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
      this.getData()
      this.setState({
        posts: {savedPosts}
      })
  }

  handleChange = (event) => {
    const inputText = event.target.value.toLowerCase()
    console.log(inputText)
    const filteredPosts = {savedPosts}.filter(post => {
        return post.name.toLowerCase().includes(inputText)
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
        {this.state.isLoaded ? (
          <PostItem post={savedPosts} />
          ) : (
            <Loader />
            )}
        </div>
        
      </div>
    )
  }
}

export default Content