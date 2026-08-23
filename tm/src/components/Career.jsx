import React, { useState } from 'react';

function Career() {
  // 1. STATE: The list of saved career items
  const [careerList, setCareerList] = useState([]);
  
  // 2. STATE: The inputs for a new career entry
  const [teamName, setTeamName] = useState('');
  const [years, setYears] = useState('');
  const [careerDetails, setCareerDetails] = useState('');

  // 3. FUNCTION: Add the new career entry
  const handleAddCareer = (e) => {
    e.preventDefault();
    
    // Require a team and years
    if (!teamName || !years) return; 

    const newCareer = {
      id: Date.now(),
      team: teamName,
      years: years,
      details: careerDetails
    };

    setCareerList([...careerList, newCareer]);
    
    // Clear the inputs
    setTeamName('');
    setYears('');
    setCareerDetails('');
  };

  // 4. FUNCTION: Delete a career entry
  const handleDeleteCareer = (idToRemove) => {
    setCareerList(careerList.filter(item => item.id !== idToRemove));
  };

  return (
    <div className="mt-4">
      
      {/* THE DISPLAY SECTION */}
      <div className="mb-4">
        {careerList.length === 0 ? (
          <p className="text-muted">No career history added yet.</p>
        ) : (
          <ul className="list-group border-0">
            {careerList.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-start border-0 border-bottom py-3 px-0">
                <div>
                  {/* LINE 1: The Team Name (Added text-primary to give it that blue look from your screenshot!) */}
                  <h6 className="mb-1 font-weight-bold text-primary">
                    {item.team}
                  </h6>
                  
                  {/* LINE 2: The Years */}
                  <p className="mb-1 small text-muted">
                    {item.years}
                  </p>

                  {/* LINE 3: The Details (Only shows if they typed something) */}
                  {item.details && (
                    <p className="mb-0 small text-dark">
                      {item.details}
                    </p>
                  )}
                </div>
                <button 
                  className="btn btn-sm btn-outline-danger ml-3" 
                  onClick={() => handleDeleteCareer(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* THE INPUT FORM */}
      <form onSubmit={handleAddCareer} className="card p-3 bg-light border-0">
        <h6 className="mb-3">Add Career History</h6>
        
        <div className="d-flex flex-wrap gap-2 mb-2">
          <input 
            type="text" 
            className="form-control flex-grow-1" 
            placeholder="Team Name (e.g. Manchester United)" 
            style={{ minWidth: '200px' }}
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <input 
            type="text" 
            className="form-control" 
            placeholder="Years (e.g. 2016 - Present)" 
            style={{ width: '180px' }}
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </div>

        <div className="d-flex gap-2">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Details (Optional, e.g. First team debut...)" 
            value={careerDetails}
            onChange={(e) => setCareerDetails(e.target.value)}
          />
          <button type="submit" className="btn btn-primary px-4">Add</button>
        </div>
      </form>

    </div>
  );
}

export default Career;