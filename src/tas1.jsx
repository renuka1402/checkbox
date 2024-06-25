import React, { useState } from 'react';

const Task = () => {
  const [items, setItems] = useState([
    { id: 1, text: '1', isChecked: false },
    { id: 2, text: '2', isChecked: false },
    { id: 3, text: '3', isChecked: false },
  ]);

  const handleCheckboxChange = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    ));
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      {items.map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <input 
            type="checkbox" 
            checked={item.isChecked} 
            onChange={() => handleCheckboxChange(item.id)} 
          />
          <span style={{ marginLeft: '8px', marginRight: '8px' }}>{item.text}</span>
          {item.isChecked && (
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};



export default Task;
