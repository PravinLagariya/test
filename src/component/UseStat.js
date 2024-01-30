import React, { useState } from 'react'

function UseStat() {
    const [count, setCount] = useState(0);
  return (
    <div className='d-flex align-items-center'>
      <button type="button" className="btn btn-primary"
      onClick={() => setCount(count + 1)}
      >+</button>
      <p className='mx-3 my-0'>{count}</p>
      <button type="button" className="btn btn-danger"
      onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}
      >-</button>
    </div>
  )
}

export default UseStat
