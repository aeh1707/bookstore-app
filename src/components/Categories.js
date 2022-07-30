import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import Navbar from './Navbar';
import { checkingStatus } from '../redux/categories/categories';

const Categories = ({ Categories }) => {
  const dispatch = useDispatch();

  const check = () => {
    dispatch(checkingStatus());
  };

  return (
    <>
      <Navbar />
      <main className="categories">
        <p>
          {Categories}
        </p>
        <button type="button" onClick={() => check()}>Check status</button>
      </main>
    </>
  );
};

Categories.propTypes = {
  Categories: PropTypes.instanceOf(Array).isRequired,
};

export default Categories;
