import React from 'react'

export default function Detail(props) {
    console.log(props)

    
    return (
        <div>
            Tham so: {props.match.params.id}
        </div>
    )
}
