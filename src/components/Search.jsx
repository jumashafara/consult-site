import { useState } from 'react';

function Search() {
  const [result, setResult] = useState();
  return (
    <div>
      <div className='p-5 mt-5'>
        <h1 className='font-weight-light'>Looking for something?</h1>
        <h5 className='font-weight-light'>
          Start typing into the search box below
        </h5>
        <div className='mt-4 item-align-center'>
          <input
            type='text'
            className='btn border-success text-left'
            placeholder='search topics here'
            onChange={(e) => setResult(e.currentTarget.value)}
          />
          <button className='btn btn-success ml-2'>
            <svg
              width='1.5em'
              height='1.5em'
              viewBox='0 0 16 16'
              className='bi bi-search'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z'
              />
              <path
                fillRule='evenodd'
                d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z'
              />
            </svg>
          </button>
        </div>
        <div className='input p-2'>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
}

export default Search;
