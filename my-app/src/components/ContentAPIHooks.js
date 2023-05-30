import React, { useState, useEffect } from 'react';
import css from './css/Content.module.css';
import PostItem from './PostItemAPI';
import Loader from './Loader';
import axios from 'axios';
import API_KEY from '../secrets';

const Content = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    console.log('Component mounted');
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`)
      .then(response => {
        console.log(response);
        const fetchedPosts = response.data.hits;
        setPosts(fetchedPosts);
        setSavedPosts(fetchedPosts);
        setIsLoaded(true);
      });
  };

  const handleChange = (event) => {
    const name = event.target.value.toLowerCase();
    console.log(name);
    const filteredPosts = savedPosts.filter(post => {
      return post.user.toLowerCase().includes(name);
    });
    setPosts(filteredPosts);
  };

  return (
    <div className={css.Content}>
      <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <form>
          <label htmlFor="searchinput">Search:</label>
          <input
            onChange={handleChange}
            type="search"
            id="searchinput"
          />
          <h4>posts found: {posts.length}</h4>
        </form>
      </div>
      <div className={css.SearchResults}>
        {isLoaded ? (
          <PostItem post={posts} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Content;
