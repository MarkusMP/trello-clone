import React from 'react'
import './Card.scss'
import {removeCardAction} from '../../redux/actions/listsAction'
import {useDispatch} from 'react-redux'
import {Draggable} from 'react-beautiful-dnd'

const Cards = ({data, id, listId, index}) => {

    const dispatch = useDispatch()

function removeCard() {
dispatch(removeCardAction(id, data.id, listId))
}

    return (
        <Draggable draggableId={String(data.id)} index={index}>
            {provided => (
                <div className="todo" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <span>{data.title}</span>
            <button className="delete" onClick={removeCard}>X</button>
        </div>
            )}

        </Draggable>
        
    )
}

export default Cards
