import React, { useState, useEffect } from 'react';
import axios from 'axios'
import NewsItem from './NewsItem';
import Loader from './Loader';

const NewsList = () => {

  const [news, setNews] = useState({
    items: null,
    loading: false,
    error: false,
  })

  const key = process.env.REACT_APP_API_KEY;
  const url = `https://finnhub.io/api/v1/news?category=general&token=${key}`

  useEffect(() => {
    setNews({
      items: null,
      loading: true,
      error: false,
    })
    axios.get(url)
    .then(response => {
      console.log(response.data)
      setNews({
        items: response.data,
        loading: false,
        error: false,
      })
    })
    .catch(() => {
      setNews({
        items: null,
        loading: false,
        error: true,
      })
    })

  }, [url]);


  let display;

  if(news.loading){
    display = <Loader />
  }

  if(news.items) {
    display = 
    <div className='news'>
      {news.items.map((i) => 
        <NewsItem id={i.id} headline={i.headline} image={i.image} url={i.url} summary={i.summary} source={i.source}/>
      )}
    </div>

  }

  return (
    <div>
      <h1 className="news-heading">Current News</h1>
      {display}
    </div>
  )
}

export default NewsList;
