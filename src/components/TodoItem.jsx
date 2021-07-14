import React, { useState } from 'react'

function TodoItem(props) {

    const [ done, setDone] = useState(false);

    function toggleItem() {
        setDone( prev => !prev);
    }

    return <li key={props.index} id={props.index} onClick={ ()=> props.onClick(props.index)} style={{ textDecoration: done && "line-through"}}>{props.item}</li>;
}

export default TodoItem
