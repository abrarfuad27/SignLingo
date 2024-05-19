import React from 'react';
import '../style.css'
import data from './data'
import FlashCard from './FlashCard';
import Navbar from './Navbar';


export default function LearnPage(){
    const cardArray = data.map((card,index)=>{
        return <FlashCard key={index} card={card} />
    })
    return (
        <>
        <Navbar />
        <div className='learn-container'>
            <div className='alphabets'>
                <h2> Alphabets & Numerals</h2>
                <div className='flashcard-container'>
                    {cardArray}
                    </div>
            </div>

            
        </div>
        </>
    )
}