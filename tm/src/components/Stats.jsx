import React, { useState } from 'react';

function Stats() {
  // 1. STATE: The list of saved stats
  const [statsList, setStatsList] = useState([]);
  
  // 2. STATE: The inputs the user is currently typing
  const [statName, setStatName] = useState('');
  const [statValue, setStatValue] = useState('');

  // 3. FUNCTION: Add the new stat to the list
  const handleAddStat = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    // Don't add if fields are empty
    if (!statName || !statValue) return; 

    const newStat = {
      id: Date.now(), // Creates a unique ID
      name: statName,
      value: statValue
    };

    // Add new stat to the array and clear the input fields
    setStatsList([...statsList, newStat]);
    setStatName('');
    setStatValue('');
  };

  // 4. FUNCTION: Delete a stat
  const handleDeleteStat = (idToRemove) => {
    setStatsList(statsList.filter(stat => stat.id !== idToRemove));
  };

  return (
    <div className="mt-4">
      
      {/* THE DISPLAY SECTION (Shows added stats) */}
      <div className="mb-4">
        {statsList.length === 0 ? (
          <p className="text-muted">No stats added yet.</p>
        ) : (
          <ul className="list-group">
            {statsList.map((stat) => (
              <li key={stat.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span><strong>{stat.name}:</strong> {stat.value}</span>
                <button 
                  className="btn btn-sm btn-outline-danger" 
                  onClick={() => handleDeleteStat(stat.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* THE INPUT FORM (To add new stats) */}
      <form onSubmit={handleAddStat} className="card p-3 bg-light border-0">
        <h6 className="mb-3">Add New Stat</h6>
        <div className="d-flex gap-2">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Stat Name (e.g. Top Speed)" 
            value={statName}
            onChange={(e) => setStatName(e.target.value)}
          />
          <input 
            type="text" 
            className="form-control" 
            placeholder="Value (e.g. 34 km/h)" 
            value={statValue}
            onChange={(e) => setStatValue(e.target.value)}
          />
          <button type="submit" className="btn btn-primary px-4">Add</button>
        </div>
      </form>

    </div>
  );
}

export default Stats;