import React, { Component } from 'react';
import '../style.css'
export default function FlashCard(props){

    return (
        <div className='flashcard'>
            <h5>{props.card.Description}</h5>
            <img className='flashcard-image' src={props.card.Image} />
        </div>
    )

}