import React, { useState } from 'react';

function Awards({ awardsList = [], setAwardsList = () => {} }) {
  const [awardName, setAwardName] = useState('');
  const [awardYear, setAwardYear] = useState('');
  const [awardDetails, setAwardDetails] = useState('');

  const handleAddAward = (e) => {
    e.preventDefault();
    if (!awardName || !awardYear) return;

  
    const combinedDetails = awardDetails ? `${awardYear} - ${awardDetails}` : awardYear;

    const newAward = {
      id: Date.now(),
      name: awardName,
      details: combinedDetails
    };

    setAwardsList([...awardsList, newAward]);
    setAwardName('');
    setAwardYear('');
    setAwardDetails('');
  };

  const handleDeleteAward = (idToRemove) => {
    setAwardsList(awardsList.filter(award => award.id !== idToRemove));
  };

  return (
    <div className="mt-4">
      <div className="card shadow-sm p-4 mb-4 border-0 bg-light">
        <h5 className="font-weight-bold mb-3">Add New Award</h5>
        <form onSubmit={handleAddAward}>
          <div className="form-row">
            <div className="col-md-4 mb-2">
              <input 
                type="text" 
                className="form-control form-control-sm" 
                placeholder="Award Name (e.g. MVP)" 
                value={awardName} 
                onChange={(e) => setAwardName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3 mb-2">
              <input 
                type="text" 
                className="form-control form-control-sm" 
                placeholder="Team" 
                value={awardYear} 
                onChange={(e) => setAwardYear(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3 mb-2">
              <input 
                type="text" 
                className="form-control form-control-sm" 
                placeholder="Year (e.g. 2024)" 
                value={awardDetails} 
                onChange={(e) => setAwardDetails(e.target.value)}
              />
            </div>
            <div className="col-md-2 mb-2">
              <button type="submit" className="btn btn-success btn-sm btn-block font-weight-bold">Add</button>
            </div>
          </div>
        </form>
      </div>

      <div className="mb-4">
        {awardsList.length === 0 ? (
          <p className="text-muted text-center py-3">No awards added yet.</p>
        ) : (
          <ul className="list-group shadow-sm border-0">
            {awardsList.map((award) => (
              <li key={award.id} className="list-group-item d-flex justify-content-between align-items-center py-3">
                <div>
                  <strong>{award.name}</strong>
                  {award.details && <p className="mb-0 text-muted small">{award.details}</p>}
                </div>
                <button 
                  onClick={() => handleDeleteAward(award.id)} 
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

export default Awards;