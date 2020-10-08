import React from 'react';

const Search = () => {
  return (
    <div>
      <form className='form-block' method='POST'>
        <label htmlFor='search'>Search</label>
        <input type='text' name='symbol' placeholder='APPL' />
        <button className='btn-block'>Search</button>
      </form>
    </div>
  )
}

export default Search;