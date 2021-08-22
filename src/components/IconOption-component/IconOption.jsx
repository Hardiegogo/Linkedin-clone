import React from 'react'
import './IconOption.css'

function IconOption({Icon,title,color}) {
    return (
        <div className="iconOption">
            <Icon style={{color: color}}/>
            <h4>{title}</h4>
            
            
        </div>
    )
}

export default IconOption 

   