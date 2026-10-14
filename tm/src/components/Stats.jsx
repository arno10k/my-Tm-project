import React, { useState } from 'react';

function Stats({ statsList = [], setStatsList = () => {} }) {
  const [statLabel, setStatLabel] = useState('');
  const [statValue, setStatValue] = useState('');

  const handleAddStat = (e) => {
    e.preventDefault();
    if (!statLabel || !statValue) return;

    const newStat = {
      id: Date.now(),
      label: statLabel,
      value: statValue
    };

    setStatsList([...statsList, newStat]);
    setStatLabel('');
    setStatValue('');
  };

  const handleDeleteStat = (idToRemove) => {
    setStatsList(statsList.filter(stat => stat.id !== idToRemove));
  };

  return (
    <div className="mt-4">
      <div className="card shadow-sm p-4 mb-4 border-0 bg-light">
        <h5 className="font-weight-bold mb-3">Add New Stat</h5>
        <form onSubmit={handleAddStat}>
          <div className="form-row">
            <div className="col-md-5 mb-2">
              <input 
                type="text" 
                className="form-control form-control-sm" 
                placeholder="Stat Name (e.g. Goals)" 
                value={statLabel} 
                onChange={(e) => setStatLabel(e.target.value)}
                required
              />
            </div>
            <div className="col-md-5 mb-2">
              <input 
                type="text" 
                className="form-control form-control-sm" 
                placeholder="Value (e.g. 25)" 
                value={statValue} 
                onChange={(e) => setStatValue(e.target.value)}
                required
              />
            </div>
            <div className="col-md-2 mb-2">
              <button type="submit" className="btn btn-success btn-sm btn-block font-weight-bold">Add</button>
            </div>
          </div>
        </form>
      </div>

      <div className="mb-4">
        {statsList.length === 0 ? (
          <p className="text-muted text-center py-3">No stats added yet.</p>
        ) : (
          <ul className="list-group shadow-sm border-0">
            {statsList.map((stat) => (
              <li key={stat.id} className="list-group-item d-flex justify-content-between align-items-center py-3">
                <span><strong>{stat.label}:</strong> {stat.value}</span>
                <button 
                  onClick={() => handleDeleteStat(stat.id)} 
                  className="btn btn-sm btn-outline-danger font-weight-bold"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Stats;