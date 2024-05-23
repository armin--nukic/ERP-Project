import React, { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import AddItemModal from "./components/AddItemModal";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchItems = async () => {
    try {
      const response = await fetch(`${apiUrl}/items`);
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddItem = async (name, description) => {
    try {
      const response = await fetch(`${apiUrl}/items/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      });
      if (!response.ok) {
        throw new Error("Failed to add item");
      }
      const newItem = await response.json();
      setItems((prevItems) => [...prevItems, newItem]);
      setShowModal(false);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      const response = await fetch(`${apiUrl}/items/delete/${itemId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete item");
      }
      setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  return (
    <div className="app">
      <h1>Dashboard</h1>
      <button onClick={handleShowModal}>Create New</button>
      <ItemList items={items} onDeleteItem={handleDeleteItem} />
      {showModal && (
        <AddItemModal onClose={handleCloseModal} onAddItem={handleAddItem} />
      )}
    </div>
  );
};

export default App;
