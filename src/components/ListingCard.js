import React, {useState} from "react";

function ListingCard({listing, handleDeleteEvent}) {
  const [star,setStar]=useState(true)

  function handleClick(){
    setStar(!star)
  }

  const buttonClass= star ? "emoji-button favorite" : "emoji-button favorite active"
  const buttonClick=star ? "☆":'★'


  function handleDelete(){
    handleDeleteEvent(listing, listing.id)
  }



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        <button onClick={handleClick} className={buttonClass}>{buttonClick}</button>
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
