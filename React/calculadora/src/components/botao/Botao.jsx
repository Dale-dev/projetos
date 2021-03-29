import React from 'react'

import './Botao.css'

export default props => {
    let classes = 'Botao '
    classes += props.operacao ? 'operacao' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    return (
    <button onClick= {e =>props.click &&  props.click(props.label)}
     className={classes}> {props.label} </button>
     ) 
}