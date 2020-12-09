import React, {useRef, useState} from 'react'
import {Cards} from '../components'
import {addListAction, sort} from '../redux/actions/listsAction'
import {useDispatch, useSelector} from 'react-redux'
import './pagesCss/Home.scss'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'

const Home = () => {
const [Open, setOpen] = useState(false)
const textRef = useRef()
const dispatch = useDispatch()
const lists = useSelector(state => state.lists.lists)

function addList(e) {
    e.preventDefault()

    dispatch(addListAction({
            title: textRef.current.value,
            id: lists.length 
    }))
    
    openHandler()
}

function openHandler() {
    setOpen(prevOpen => !prevOpen)
}

function onDragEnd(result) {
const {destination, source, draggableId, type} = result

if(!destination) {
    return;
}

dispatch(sort(source.droppableId,
    destination.droppableId,
    source.index,
    destination.index,
    draggableId,
    type
    ))

}

    return (
        <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="all-lists" direction="horizontal" type="list">
                  {provided => (
                    <div style={{display: 'flex', overflowX: 'scroll', height: '92vh' }} {...provided.droppableProps} ref={provided.innerRef} >

{lists ? lists.map((list, index) => <Cards id={list.id} key={list.id} title={list.title} index={index}/>) : ''}
{provided.placeholder}
{!Open ? <div className="add-todos" onClick={openHandler}>
        <h3>+ Add a List</h3>
    </div> : <div className="cardAdds">
   <form onSubmit={addList}>
   <textarea ref={textRef}  dir="auto" placeholder="Enter a List Title...." spellCheck="false"></textarea>
    <div>
        <button className='add' >Add List</button>
        <button type="button" className='close' onClick={openHandler}>X</button>
    </div>
   </form>
        </div>}

</div>
                  )}

        </Droppable>
        </DragDropContext>
        
    )
}

export default Home
