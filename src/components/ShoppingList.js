import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  
  // const [shoppingItems, setShoppingItems] = useState(items);
  
  function handleSearch(event) {
    // console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onFormSubmit(item){
    const newItemList = [...items, item]
    onSubmit(newItemList)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
    })
    .filter((item) => item.name.toUpperCase().includes(searchValue.toUpperCase()));
  
    
  return (
    <div className="ShoppingList">
      <ItemForm 
      onItemFormSubmit={onFormSubmit}
      />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
