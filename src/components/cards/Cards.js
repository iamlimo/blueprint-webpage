import React from "react";

const Cards = ({ cards }) => {
  return <div className='flex flex-row flex-wrap items-center justify-start mt-36'>
    {cards.map(card => (
      <div style={{ backgroundColor: card.bgcolor }} className='rounded flex flex-col rounded-3xl mb-12 ml-10 p-12 w-1/3'>
        <h3>{card.name}</h3>
        <p className=''>{card.description}</p>
        <div style={{ backgroundColor: card.color }} className='rounded-full self-center h-36 w-36 mt-10'></div>
      </div>
    ))}
  </div>;
};

export default Cards;