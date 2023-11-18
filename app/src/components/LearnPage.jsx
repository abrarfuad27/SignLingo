import React from 'react';
import '../style.css'
import data from './data'
import FlashCard from './FlashCard';


export default function LearnPage(){
    const cardArray = data.map((card,index)=>{
        return <FlashCard key={index} card={card} />
    })
    return (
        <div className='learn-container'>
            <div className='alphabets'>
                <h3> Alphabets</h3>
                <div className='flashcard-container'>
                    {cardArray}
                    </div>
            </div>

            
        </div>
    )
}