import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { sendPost } from '../../redux/actions/postsActions';

export const PostForm = () => {
  const initialForm = {
    name: '',
    description: '',
  };

  const [formValues, handleInputChange, reset] = useForm(initialForm);
  const { name, description } = formValues;
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !description) return
    dispatch(sendPost(formValues))
    reset()
  };

  return (
      <form className='row mt-3 mb-3' onSubmit={handleSubmit}>
        <div className='form-group col-md-3 mb-0'>
          <input
            type='text'
            className='form-control'
            placeholder='Nombre'
            name='name'
            value={name}
            onChange={handleInputChange}
            maxLength={20}
          />
        </div>
        <div className='input-group col-md-9'>
          <input
            type='text'
            className='form-control'
            placeholder='Mensaje'
            name='description'
            value={description}
            onChange={handleInputChange}
            maxLength={80}
          />
          <div className='input-group-append'>
            <button className='btn btn-primary' type='submit' >
              Enviar
            </button>
          </div>
        </div>
      </form>
  );
};
