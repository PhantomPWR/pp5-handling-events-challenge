import React, {useState, useEffect} from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts'
import PostItem from './PostItem'
import Loader from './Loader'

function ContentHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState([]);

useEffect(() => {
  setTimeout(() => {
      setIsLoaded(true);
      setFetchedPosts(savedPosts);
  }, 2000)

  // Cleanup function
  return () => {
    // Code to run on component unmount
    return () => {
      clearTimeout();
    }
  };
}, []); // Dependency array

const handleChange = (event) => {
  const name = event.target.value.toLowerCase()
  console.log(name)
  const filteredPosts = fetchedPosts.filter(post => {
      return post.name.toLowerCase().includes(name)
  })
  setFetchedPosts(filteredPosts);

}

  return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
              <label
              htmlFor="searchinput"
              >Search:</label>
              <input
              onChange={(event) => handleChange(event)}
              type="search"
              id="searchinput"
              ></input>
              <h4>posts found: {fetchedPosts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
        {
          isLoaded ? (
            <PostItem post={fetchedPosts} />
            ) : (
              <Loader />
              )
        }

        </div>
        
      </div>
    )
}

export default ContentHooks