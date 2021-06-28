import React from 'react'

export default function Fcomponent(props) {
    return (
        <div>
           <h1>Hello, {props.sname} {props.name} </h1> 
        </div>
    )
}

// Задаю значение по умолчанию для props компонента Fcomponent
Fcomponent.defaultProps = { sname : "Bashurov"};
