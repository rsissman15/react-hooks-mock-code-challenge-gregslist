import React,{useState} from "react";


function Search({justClickedSubmit}) {

  const [search,setSearch]=useState('')


  function handleSubmit(e) {
    e.preventDefault();
    justClickedSubmit(search);
  }

  

  function handleChange(e){
   setSearch(e.target.value);
  }

  
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
