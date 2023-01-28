import React from 'react';
import { useDispatch } from 'react-redux';
import { statusChecked } from '../redux/categories/categories';
import './Categories.css';

const Categories = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(statusChecked());
  };

  return (
    <div className='categories-wrap'>
      <button onClick={handleSubmit}>Check Status</button>
      <form className='category-form'>
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
    </div>
  );
};

export default Categories;