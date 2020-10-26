import React from 'react';

function QuoteCard({ quote }) {
  return (
    <div className='QuoteCard'>
      <h1>Name: {quote[0].character}</h1>
      <img src={quote[0].image} alt={quote[0].character} />
      <blockquote>{quote[0].quote}</blockquote>
    </div>
  );
}

export default QuoteCard;
