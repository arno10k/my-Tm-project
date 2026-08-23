import React, { useState } from 'react';

function Awards() {
  // 1. STATE: The list of saved awards
  const [awardsList, setAwardsList] = useState([]);
  
  // 2. STATE: The inputs for a new award
  const [awardName, setAwardName] = useState('');
  const [awardYear, setAwardYear] = useState('');
  const [awardDetails, setAwardDetails] = useState('');

  // 3. FUNCTION: Add the new award
  const handleAddAward = (e) => {
    e.preventDefault();
    
    // Require at least a name and year (details can be blank)
    if (!awardName || !awardYear) return; 

    const newAward = {
      id: Date.now(),
      name: awardName,
      year: awardYear,
      details: awardDetails
    };

    setAwardsList([...awardsList, newAward]);
    
    // Clear the inputs
    setAwardName('');
    setAwardYear('');
    setAwardDetails('');
  };

  // 4. FUNCTION: Delete an award
  const handleDeleteAward = (idToRemove) => {
    setAwardsList(awardsList.filter(award => award.id !== idToRemove));
  };

  return (
    <div className="mt-4">
      
      {/* THE DISPLAY SECTION */}
      <div className="mb-4">
        {awardsList.length === 0 ? (
          <p className="text-muted">No awards added yet.</p>
        ) : (
          <ul className="list-group">
            {awardsList.map((award) => (
              <li key={award.id} className="list-group-item d-flex justify-content-between align-items-start py-3">
               <div>
                  {/* TITLE LINE: Trophy Emoji + Bold Name */}
                  <h6 className="mb-1 font-weight-bold">
                    🏆 {award.name}
                  </h6>
                  
                  {/* DETAILS LINE: Team - Year */}
                  <p className="mb-0 small text-muted">
                    {award.details ? `${award.details} - ${award.year}` : award.year}
                  </p>
                </div>
                <button 
                  className="btn btn-sm btn-outline-danger ml-3" 
                  onClick={() => handleDeleteAward(award.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* THE INPUT FORM */}
      <form onSubmit={handleAddAward} className="card p-3 bg-light border-0">
        <h6 className="mb-3">Add New Award</h6>
        
        <div className="d-flex flex-wrap gap-2 mb-2">
          <input 
            type="text" 
            className="form-control flex-grow-1" 
            placeholder="Award Name (e.g. Copa del Rey Juvenil)" 
            style={{ minWidth: '200px' }}
            value={awardName}
            onChange={(e) => setAwardName(e.target.value)}
          />
          <input 
            type="text" 
            className="form-control" 
            placeholder="Year (e.g. 2024)" 
            style={{ width: '120px' }}
            value={awardYear}
            onChange={(e) => setAwardYear(e.target.value)}
          />
        </div>

        <div className="d-flex gap-2">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Details (Optional, e.g. Mallorca U19)" 
            value={awardDetails}
            onChange={(e) => setAwardDetails(e.target.value)}
          />
          <button type="submit" className="btn btn-primary px-4">Add</button>
        </div>
      </form>

    </div>
  );
}

export default Awards;