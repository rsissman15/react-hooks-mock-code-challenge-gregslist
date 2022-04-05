import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings,handleDeleteEvent}) {
  const renderListings=listings.map(listing=>{
    return <ListingCard
    handleDeleteEvent={handleDeleteEvent}
    key={listing.id}
    listing={listing}
    
    />

  })
  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
