
export default function cards(state = {}, action) {
switch(action.type) {

    case 'CHANGE_BACKGROUND': 
    console.log(action.payload)
    return {
        ...state,
        color: action.payload
    }
    
    default: 
    return state
}
}