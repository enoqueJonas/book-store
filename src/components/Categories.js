import React from 'react';
import { useDispatch } from 'react-redux';
import { statusChecked } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(statusChecked());
  };

  return (
    <>
      <button onClick={handleSubmit}>Check Status</button>
      <form>
        <label className='category-label'>
          Categories:
          <select className='category-select'>
            <option className='category-item'>Choose one</option>
            <option className='category-item'>Romance</option>
            <option className='category-item'>Personal Development</option>
            <option className='category-item'>Biography</option>
            <option className='category-item'>Tale</option>
          </select>
        </label>
      </form>
    </>
  );
};

export default Categories;