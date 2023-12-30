import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Article from './assets/components/Article'
import axios from 'axios'
import Loader from './assets/components/Loader'

const App = () => {
  const rootUrl = 'https://graph.facebook.com/'
  const pageId = '133156453212661'
  const accessToken = import.meta.env.VITE_PAGE_ACCESS_TOKEN
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchURl = rootUrl + pageId + '/feed?fields=id,message,created_time,permalink_url,full_picture,is_hidden,comments.limit(1).summary(true),likes.limit(1).summary(true)&limit=5&access_token=' + accessToken;
        let newPosts = [];

        while (fetchURl) {
          const response = await axios.get(fetchURl);
          const responseData = response.data.data;

          if (responseData && responseData.length > 0) {
            newPosts = [...newPosts, ...responseData];
            fetchURl = response.data.paging.next;

            setPosts(newPosts);
            localStorage.setItem('posts', JSON.stringify(newPosts));
            setIsLoading(false);
          } else {
            fetchURl = null;
          }
        }

      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    const storedPosts = JSON.parse(localStorage.getItem('posts'));

    if (storedPosts && storedPosts.length > 0) {
      setPosts(storedPosts);
      setIsLoading(false);
    } else {
      fetchData();
    }
  }, []);

  const tagSearch = (tag) => {
    setFilteredPosts([])
    posts.forEach(post => {
      let postTag = post.message.split('#')[1].replace(/\n/g, '')
      if (postTag == tag) {
        setFilteredPosts(prevFilteredPosts => [...prevFilteredPosts, post]);
      }
    })
  }
  let displayPosts = !isLoading ? (filteredPosts.length === 0 ? posts : filteredPosts) : [];
  return (
    <>
      <Navbar tagSearch={tagSearch} />
      {
        !isLoading ? (
          displayPosts.map(post => <Article key={post.id} post={post} />)
        ) : (
          <Loader />
        )
      }
    </>
  )
}

export default App