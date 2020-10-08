import React from 'react';

const NewsItem = ({ headline, source, image, id, summary, url}) => {
  return (
    <div key={id} className='news-card'>
      <h3>{headline}</h3>
      <img src={image}  alt={headline}/>
      <p>{summary}</p>
    <a href={url} target="blank">Visit {source}</a>
  </div>
  )
}

export default NewsItem;