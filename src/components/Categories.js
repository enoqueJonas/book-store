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
        <label>
          Categorie:
          <select>
            <option>Choose one</option>
            <option>Romance</option>
            <option>Personal Development</option>
            <option>Biography</option>
            <option>Tale</option>
          </select>
        </label>
      </form>
    </>
  );
};

export default Categories;