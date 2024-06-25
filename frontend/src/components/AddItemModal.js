import React, { useState } from "react";

const AddItemModal = ({ onClose, onAddItem }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddNewItem = (e) => {
    e.preventDefault();
    onAddItem(name, description);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add New Item</h2>
          <button className="close" onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleAddNewItem}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;
