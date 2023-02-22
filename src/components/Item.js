/** @format */

import React, { useState } from 'react';

function Item({ name, category }) {
  const [item, setItem] = useState(false);

  function handleItem() {
    item ? setItem(false) : setItem(true);
  }

  const liClass = item ? 'in-cart' : '';

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className='category'>{category}</span>
      <button
        onClick={handleItem}
        className='add'
      >
        {!item ? 'Add to Cart' : 'Remove From Cart'}
      </button>
    </li>
  );
}

export default Item;
