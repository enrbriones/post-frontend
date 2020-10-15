import React from 'react'
import { Button } from '../common/Button'
import { useDispatch } from 'react-redux'
import { startDelete } from '../../redux/actions/postsActions'

export const DeleteButton = ({id}) => {

    const dispatch = useDispatch()

    const handleClick = () => {
      dispatch(startDelete(id))
    }

    return (
        <Button text={'Eliminar'} 
        classes={'btn btn-light'}
        handleClick={handleClick}
        >
            <i className='fas fa-trash text-muted'></i>
        </Button>
    )
}
