import React from 'react'

function NotFound({history}) {

    return (
        <div>
            <h1 className='title'>Page Not Found</h1>
            <button onClick={() => history.push('/')}>GoHome</button>
        </div>
    )
}

export default NotFound
