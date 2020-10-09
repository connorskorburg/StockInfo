import React, { useState } from 'react';
import Loader from './Loader';
import axios from 'axios';

const Search = () => {

  const [search, setSearch] = useState({
    symbol: '',
    currentPrice: null,
    loading: false,
    error: false,
  });



  const onSubmit = (e) => {
    e.preventDefault();
    if(search.symbol === '') {
      alert('Please Enter Valid Symbol!')
    } else {

      
      console.log('value:',search.symbol);
      setSearch({
        symbol: search.symbol,
        currentPrice: null,
        loading: true,
        error: false,
      })
      
      axios.get(`https://finnhub.io/api/v1/quote?symbol=${search.symbol}&token=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        console.log(res);
        setSearch({
          symbol: search.symbol.toUpperCase(),
          currentPrice: res.data['c'],
          loading: false,
          error: false,
        })
      })
      .catch(() => {
        setSearch({
          symbol: '',
          currentPrice: null,
          loading: false,
          error: true,
        })
      })
    }
  }

  const onChange = e => setSearch({symbol: e.target.value, currentPrice: null, loading: false, error: false});
  
    
  

  let content;

  if(search.error) {
    content = <h2>No Results Found. Try a different search!</h2>
  }

  if (search.loading) {
    content =
     <Loader />;
  }

  if(search.currentPrice) {
    content = 
    <div className="result">
      <h1>Current Price for {search.symbol} is ${search.currentPrice}</h1>
    </div>
  }

  return (
    <div>
      <form className='form-block' onSubmit={onSubmit}>
        <label htmlFor='search'>Search</label>
        <input type='text' name='symbol' value={search.symbol} onChange={onChange} placeholder='APPL' />
        <button className='btn-block'>Search</button>
      </form>
      {content}
    </div>
  )
}

export default Search;