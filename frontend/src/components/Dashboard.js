import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import AddItemModal from "./AddItemModal";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/items`
      );
      setItems(response.data);
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
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/items/new`,
        {
          name,
          description,
        }
      );
      const newItem = response.data;
      setItems([...items, newItem]);
      setShowModal(false);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/items/delete/${itemId}`
      );
      setItems(items.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleShowModal}>Add New Item</button>
      <ItemList items={items} onDeleteItem={handleDeleteItem} />
      {showModal && (
        <AddItemModal onClose={handleCloseModal} onAddItem={handleAddItem} />
      )}
    </div>
  );
};

export default Dashboard;
