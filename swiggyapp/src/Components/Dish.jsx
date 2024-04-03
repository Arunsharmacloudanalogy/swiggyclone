import React from 'react'

function Item({ title, image }) {
    return (
        <div className='w-full h-full'>
            <img src={image} />

        </div>
    )
}

export default Item
