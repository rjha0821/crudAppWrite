import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CrudOperations.css';

const API_BASE_URL = 'http://localhost:3000';

const CrudOperations = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [formData, setFormData] = useState({ fruitName: '', prize: '' });
  const [editId, setEditId] = useState(null);

  const [filter, setFilter] = useState('');
  const [priceCondition, setPriceCondition] = useState('greaterThan');
  const [priceValue, setPriceValue] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/read`);
      setData(response.data);
      setFilteredData(response.data); // Initialize filtered data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCreate = async () => {
    const { fruitName, prize } = formData;
    const prizeAsNumber = parseInt(prize, 10); // Convert prize to integer

    if (!fruitName || isNaN(prizeAsNumber)) {
      alert('Invalid input. Ensure fruit name and prize are correctly filled.');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/create`, { fruitName, prize: prizeAsNumber });
      console.log('Create response:', response.data);
      setData([...data, response.data]);
      setFilteredData([...filteredData, response.data]); // Update filtered data
      setFormData({ fruitName: '', prize: '' });
    } catch (error) {
      console.error('Error creating data:', error.response ? error.response.data : error.message);
      alert('Failed to create data. Check console for details.');
    }
  };

  const handleUpdate = async (id) => {
    const { fruitName, prize } = formData;
    const prizeAsNumber = parseInt(prize, 10); // Convert prize to integer

    if (!fruitName || isNaN(prizeAsNumber)) {
      alert('Invalid input. Ensure fruit name and prize are correctly filled.');
      return;
    }

    try {
      const response = await axios.put(`${API_BASE_URL}/update/${id}`, { fruitName, prize: prizeAsNumber });
      console.log('Update response:', response.data);
      setData(data.map(item => (item.$id === id ? response.data : item)));
      setFilteredData(filteredData.map(item => (item.$id === id ? response.data : item)));
      setFormData({ fruitName: '', prize: '' });
      setEditId(null); // Reset editId after update
    } catch (error) {
      console.error('Error updating data:', error.response ? error.response.data : error.message);
      alert('Failed to update data. Check console for details.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/delete/${id}`);
      setData(data.filter(item => item.$id !== id));
      setFilteredData(filteredData.filter(item => item.$id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (item) => {
    setFormData({ fruitName: item.fruitName, prize: item.prize });
    setEditId(item.$id);
  };

  const handleFilter = () => {
    const priceAsNumber = parseInt(priceValue, 10);

    if (isNaN(priceAsNumber)) {
      alert('Invalid price value. Ensure the price is a number.');
      return;
    }

    let result = data;

    switch (priceCondition) {
      case 'greaterThan':
        result = data.filter(item => item.prize > priceAsNumber);
        break;
      case 'lessThan':
        result = data.filter(item => item.prize < priceAsNumber);
        break;
      case 'equalTo':
        result = data.filter(item => item.prize === priceAsNumber);
        break;
      default:
        result = data;
        break;
    }

    setFilteredData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="crud-container">
      <h1>CRUD Operations</h1>
      <div className="filter-container">
        <h2>Filter by Price</h2>
        <input
          type="number"
          placeholder="Enter price value"
          value={priceValue}
          onChange={(e) => setPriceValue(e.target.value)}
        />
        <select
          value={priceCondition}
          onChange={(e) => setPriceCondition(e.target.value)}
        >
          <option value="greaterThan">Greater than</option>
          <option value="lessThan">Less than</option>
          <option value="equalTo">Equal to</option>
        </select>
        <button onClick={handleFilter}>Filter</button>
      </div>
      <ul className="data-list">
        {filteredData.map(item => (
          <li key={item.$id} className="data-item">
            <span>{item.fruitName} - ₹{item.prize}</span>
            <div className="button-group">
              <button onClick={() => handleEdit(item)}>Update</button>
              <button onClick={() => handleDelete(item.$id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter fruit name"
          value={formData.fruitName}
          onChange={(e) => setFormData({ ...formData, fruitName: e.target.value })}
        />
        <input
          type="number"
          placeholder="Enter fruit price"
          value={formData.prize}
          onChange={(e) => setFormData({ ...formData, prize: e.target.value })}
        />
        <button onClick={editId ? () => handleUpdate(editId) : handleCreate}>
          {editId ? 'Update' : 'Create'}
        </button>
      </div>
    </div>
  );
};

export default CrudOperations;
