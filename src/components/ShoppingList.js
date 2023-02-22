/** @format */

import React, { useState } from 'react';
import Item from './Item';

function ShoppingList({ items }) {
  const [filterBy, setFilterBy] = useState('All');

  const filteredItems =
    filterBy === 'All'
      ? items
      : items.filter((item) => item.category === filterBy);

  return (
    <div className='ShoppingList'>
      <div className='Filter'>
        <select
          name='filter'
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
        >
          <option value='All'>Filter by category</option>
          <option value='Produce'>Produce</option>
          <option value='Dairy'>Dairy</option>
          <option value='Dessert'>Dessert</option>
        </select>
      </div>
      <ul className='Items'>
        {filteredItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
