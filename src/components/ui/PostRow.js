import React from 'react';
import { DeleteButton } from './DeleteButton';

export const PostRow = ({ id, name, description }) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <div className='d-flex'>
        <div style={{width:'200px', marginRight:'10px'}}>
          <h4>
            <span className='badge badge-primary badge-pill'>{name}</span>
          </h4>
        </div>
        <div>
          {description}
        </div>
      </div>
      <DeleteButton id={id} />
    </li>
  );
};
