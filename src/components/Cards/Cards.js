import React, {useState, useRef} from 'react'
import Card from '../Card/Card'
import { v4 as uuidv4} from 'uuid'
import {addCardAction, changeTitleCard, removeList} from '../../redux/actions/listsAction'
import {useDispatch, useSelector} from 'react-redux'
import {Droppable, Draggable} from 'react-beautiful-dnd'
import './Cards.scss'

const Cards = ({id, title, index}) => {
const [isOpen, setIsOpen] = useState(false)
const textRef = useRef()
const dispatch = useDispatch()

const data = useSelector(state => state.lists.lists)
const [isTitleOpen, setIsTitleOpen] = useState(false)
const changeTitleRef = useRef()

const cards = data.find(card => card.id === id)

function openHandler() {
    setIsOpen(prevOpen => !prevOpen)
}

function titleOpenHandler() {
    setIsTitleOpen(prevOpen => !prevOpen)
}

function addCard(e) {
    e.preventDefault()

   const card =  {
    title: textRef.current.value,
    id: uuidv4()
    }

    dispatch(addCardAction(card, id))

    openHandler()
}

function changeTitleHandler(e) {
    e.preventDefault()
    dispatch(changeTitleCard(changeTitleRef.current.value, id))
    setIsTitleOpen(false)
}

function removeListHandler() {
dispatch(removeList(id))
}

    return (
<Draggable draggableId={String(id)} index={index}>
    { provided => (
        <div {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}>
<Droppable droppableId={String(id)} >
{provided => (
<div className="list-wrapper">
<div className="todo-item">
{!isTitleOpen ? <div className="top" onClick={titleOpenHandler} >  <h3 >{title}</h3> </div>  : <div className="tops"><form onSubmit={changeTitleHandler}><input defaultValue={title} type="text" autoFocus onBlur={changeTitleHandler}  ref={changeTitleRef} placeholder="Rename Title..."/></form></div>}



<div className="todos"   {...provided.droppableProps} ref={provided.innerRef}>
{cards ? cards.cards.map((data, i) => <Card data={data} index={i} key={data.id} id={data.id} listId={id} /> ) : null}

{provided.placeholder}
{!isOpen ? <div className="add-todo" onClick={openHandler}>
<h3>+ Add a Card</h3>
</div> : <div className="cardAdd" >
<form onSubmit={addCard}>
<textarea ref={textRef}  dir="auto" placeholder="Enter a title for this card…" spellCheck="false"></textarea>
<div>
<button className='add' >Add Card</button>
<button type="button" className='close' onClick={openHandler}>X</button>
</div>
</form>
</div>}

<button className="removeList" onClick={removeListHandler}>Remove List</button>
</div>
</div>
</div>
)}

</Droppable>
        </div>

    )}
</Draggable>


    )
}

export default Cards