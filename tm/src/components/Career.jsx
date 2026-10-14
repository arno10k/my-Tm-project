import React, { useState } from 'react';

function Career({ careerList = [], setCareerList = () => {} }) {
  const [teamName, setTeamName] = useState('');
  const [years, setYears] = useState('');
  const [careerDetails, setCareerDetails] = useState('');

  const handleAddCareer = (e) => {
    e.preventDefault();
    if (!teamName || !years) return;

    const newItem = {
      id: Date.now(),
      team: teamName,
      years: years,
      details: careerDetails
    };

    setCareerList([...careerList, newItem]);
    setTeamName('');
    setYears('');
    setCareerDetails('');
  };

  const handleDeleteCareer = (idToRemove) => {
    setCareerList(careerList.filter(item => item.id !== idToRemove));
  };

  return (
    <div className="mt-4">
      <div className="card shadow-sm p-4 mb-4 border-0 bg-light">
        <h5 className="font-weight-bold mb-3">Add Career History</h5>
        <form onSubmit={handleAddCareer}>
          <div className="form-row">
            <div className="col-md-4 mb-2">
              <input 
                type="text" 
                className="form-control form-control-sm" 
                placeholder="Team Name (e.g. FC Barcelona)" 
                value={teamName} 
                onChange={(e) => setTeamName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3 mb-2">
              <input 
                type="text" 
                className="form-control form-control-sm" 
                placeholder="Years (e.g. 2018 - 2022)" 
                value={years} 
                onChange={(e) => setYears(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3 mb-2">
              <input 
                type="text" 
                className="form-control form-control-sm" 
                placeholder="Details (Optional)" 
                value={careerDetails} 
                onChange={(e) => setCareerDetails(e.target.value)}
              />
            </div>
            <div className="col-md-2 mb-2">
              <button type="submit" className="btn btn-success btn-sm btn-block font-weight-bold">Add</button>
            </div>
          </div>
        </form>
      </div>

      <div className="mb-4">
        {careerList.length === 0 ? (
          <p className="text-muted text-center py-3">No career history added yet.</p>
        ) : (
          <ul className="list-group shadow-sm border-0">
            {careerList.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center py-3">
                <div>
                  <strong>{item.team}</strong> ({item.years})
                  {item.details && <p className="mb-0 text-muted small">{item.details}</p>}
                </div>
                <button 
                  onClick={() => handleDeleteCareer(item.id)} 
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

export default Career;