

export const addListAction = list => ({
    type: 'ADD_LIST',
    payload: list
})


export const removeCardAction = (id, cardId, listId) => ({
    type: 'REMOVE_CARD',
    payload: {
        id,
        cardId,
        listId
    }
})

export const addCardAction = (card, id) => ({
    type: 'ADD_CARD',
    payload: {
        card,
        id
    }
})

export const changeTitleCard = (title, id) => ({
    type: 'CHANGE_CARD_TITLE',
    payload: {
        title,
        id
    }
})

export const removeList = (id) => ({
    type: 'REMOVE_LIST',
    payload: id
})

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
) => {
    return {
        type: 'DRAG_CARD',
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type
        }
    }
}