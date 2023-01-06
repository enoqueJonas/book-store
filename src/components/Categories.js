import React from 'react';
import { useDispatch } from 'react-redux';
import { statusChecked } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(statusChecked());
  };

    <>
        <button onClick={handleSubmit}>Check Status</button>
    </>;
};

export default Categories;