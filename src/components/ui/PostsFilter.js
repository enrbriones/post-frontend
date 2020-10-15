import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions/postsActions';

export const PostsFilter = () => {

  const dispatch = useDispatch()

  const handleChange = async (e) => {
    const word =e.target.value

    dispatch(changeFilter(word))
  }


  return (
    <div className='row'>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Filtrar por nombre'
          name='filter'
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
