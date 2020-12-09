import React from 'react'
import './ColorCard.scss'
import {useDispatch} from 'react-redux'
import {changeBackgroundAction} from '../../redux/actions/colorBackgroundAction'

const ColorCard = ({color}) => {
    const dispatch = useDispatch()

    function changeBackgroundHandler() {
        dispatch(changeBackgroundAction(color))
    }

    return (
       <div className="color-card-container">
            <div onClick={changeBackgroundHandler} style={{backgroundColor: color}} className="color-card">
    <h1>{color}</h1>
        </div>
       </div>
    )
}

export default ColorCard
