import React,{useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings,setListing]=useState([])

  const [ search, setSearch ] = useState( '' )

  const searchedListings = listings.filter(listObj => {
    return listObj.description.toLowerCase().includes( search.toLowerCase() )
  })

  

  function justClickedSubmit(newString){
    setSearch(newString)
  }


  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(res=>res.json())
    .then(data=>setListing(data))
  },[])


  function handleDeleteEvent(listing,id){

    const deleteListings=listings.filter(listing=>listing.id !== id)

    setListing(deleteListings)

    fetch(`http://localhost:6001/listings/${id}`, {
      method : "DELETE"
    })
  }



  return (
    <div className="app">
      <Header justClickedSubmit={justClickedSubmit} />
      <ListingsContainer listings={searchedListings} handleDeleteEvent={handleDeleteEvent} />
    </div>
  );
}

export default App;
