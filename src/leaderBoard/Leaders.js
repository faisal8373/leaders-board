import React from 'react';
import './LeadersStyle.css';
import Students from './Students';

function Leaders() {
let students = [
    {
        name: 'Faisal',
        score: 340
    },
    {
        name: 'Javed',
        score: 325
    },
    {
        name: 'Shahzad',
        score: 310
    },
    {
        name: 'Aslam',
        score: 240,
        },
]

    return (
        <div>
            <h1 className='heading'>
            Leaders Board
            </h1>
            <div className='contianer'>
                {students.map((item, i)=>{
  
  return <Students name={item.name} score={item.score} />
})}
                
            </div>
        </div>
    )
}

export default Leaders
