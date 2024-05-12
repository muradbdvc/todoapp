import React from 'react'
import ReactDOM from 'react-dom/client'

function Card(props){
    const {titleText, descText} = props;
    // const todoTitle = "Card Title";
    // const todoDesc = "Card Title Card Title Card Title Card Title Card TitleCard TitleCard Title Card TitleCard Title Card Title Card Title Card Title";
    const date = new Date();
    const dateName = date.getDate();
    const monthName = date.getMonth();
    const currentYear = date.getFullYear();
  
    return(
        <div className="card m-6 p-6">
          <h3 className='cardTitle'>{titleText}</h3>
          <p className='cardDesc'>{descText}</p>
          <p className='cardDate'>{dateName+ "/" + monthName+ "/" + currentYear}</p>
        </div>
    )
  }
  
  export default Card;