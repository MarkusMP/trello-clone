import React from 'react'
import {ColorCard} from '../components'
import {colorData} from '../ColorData'
import './pagesCss/Settings.scss'

const settings = () => {
    return (
        <div className="settings-container">
            <div className="color-container">
                {
                   colorData.map(color => <ColorCard key={color.color} color={color.color}/>)
                }
            </div>
        </div>
    )
}

export default settings
