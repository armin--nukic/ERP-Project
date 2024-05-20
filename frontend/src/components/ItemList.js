import React from "react";

const ItemList = ({ items, onDeleteItem }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item" key={item._id}>
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
          <button onClick={() => onDeleteItem(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
