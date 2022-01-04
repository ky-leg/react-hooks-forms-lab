import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({
  onFormSubmit
}) {
  
  function onSubmit(event){
    event.preventDefault();
    const itemName = event.target.name.value;
    const itemCategory = event.target.category.value;
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }
    onFormSubmit(newItem)
    // console.log(newItem)
  }

  return (
    <form onSubmit={onSubmit}className="NewItem">
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
