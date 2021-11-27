import React from 'react'

function Students(props) {
    return (
        <div className='studentContainer'>
            <div className='nameUni'>
            <h2 className='studentName'>Student Name: {props.name}</h2>
            
            <p className='university'>University Name</p>
            </div>
            <div className='stuScore'>
            <h2 className='score'>Score: {props.score}</h2>
            </div>
        </div>
    )
}

export default Students
