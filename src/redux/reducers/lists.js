const initialState = {
    lists: []
}

export default function cards(state = initialState, action) {
switch(action.type) {
    case 'ADD_LIST': {
    return {
        lists: [...state.lists,  {title: action.payload.title, id: action.payload.id, cards: []}] 
    };
    }
    case 'ADD_CARD': {
        return  {
            lists: state.lists.map(list => list.id === action.payload.id ? {...list, cards: [...list.cards, action.payload.card]} : {...list})
        }
    }
    case 'REMOVE_CARD': {

        return {
            lists: state.lists.map(list => list.id === action.payload.listId ? {...list, cards: list.cards.filter(card => card.id === action.payload.cardId ? null : card)} : {...list})
        }
    }
    case 'CHANGE_CARD_TITLE': {
        return {
            lists: state.lists.map(list => list.id === action.payload.id ? {...list, title: action.payload.title} : {...list})
        }
    }

    case 'REMOVE_LIST': {
        return {
            lists: state.lists.filter(list => list.id !== action.payload)
        }
    }

    case 'DRAG_CARD': {
        const {droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
             type} = action.payload

        const newState = {...state}

        if(type === "list") {
           const pulledOutList = state.lists.splice(droppableIndexStart, 1);
           newState.lists.splice(droppableIndexEnd, 0, ...pulledOutList)
            return newState
        }

if(droppableIdStart === droppableIdEnd) {
    const list = state.lists[droppableIdStart]
    const card = list.cards.splice(droppableIndexStart, 1);
    list.cards.splice(droppableIndexEnd, 0, {...card[0]})
} 

if(droppableIdStart !== droppableIdEnd) {
    const listStart = state.lists.find(list => list.id === JSON.parse(droppableIdStart) )

    const card = listStart.cards.splice(droppableIndexStart, 1);

    const listEnd = state.lists.find(list => JSON.parse(droppableIdEnd) === list.id)

    listEnd.cards.splice(droppableIndexEnd, 0, ...card);

    return newState
}

 return newState
    }

    
    default: 
    return state
}
}