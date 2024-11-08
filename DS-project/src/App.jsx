// App.js
import React, { useState } from 'react';
import Stack from './stack'; 

const App = () => {
  const [stack] = useState(new Stack());
  const [shipment, setShipment] = useState('');
  const [stackItems, setStackItems] = useState(stack.getItems());
  const [distributedItem, setDistributedItem] = useState(null); // New state

  const addShipment = () => {
    if (shipment !== '') {
      stack.push(shipment);  
      setStackItems([...stack.getItems()]); 
      setShipment('');  
    }
  };

  const distributeShipment = () => {
    const item = stack.pop();  
    setStackItems([...stack.getItems()]); 
    setDistributedItem(item); // Update distributed item
  };

  return (
    
      <div className="container">
        <h1>Food Supply Chain Management</h1>

        <div className="shipment-form">
          <input
            type="text"
            value={shipment}
            onChange={(e) => setShipment(e.target.value)}
            placeholder="Enter new food shipment"
          />
          <button onClick={addShipment}>Add Shipment</button>
        </div>

        <div className="stack-display">
          <h2>Current Shipments</h2>
          {stackItems.length > 0 ? (
            <ul>
              {stackItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No shipments available</p>
          )}
        </div>

        <button onClick={distributeShipment} disabled={stack.isEmpty()}>
          Distribute Shipment
        </button>

        {distributedItem && ( // Display the distributed item if there is one
          <div className="distributed-item">
            <h2>Last Distributed Shipment</h2>
            <p>{distributedItem}</p>
          </div>
        )}
      </div>
   
  );
};

export default App;
