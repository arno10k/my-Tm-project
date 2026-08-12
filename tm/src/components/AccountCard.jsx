import React, { useState } from 'react';
import '../components/Messages.css'; 
import defaultAvatar from '../assets/CL.png'; 

function AccountCard({ user, pageType, onProfileClick, activeTab }) {

  const [followState, setFollowState] = useState('initial'); 
  const [connectState, setConnectState] = useState('initial'); 
  const [requestStatus, setRequestStatus] = useState('pending'); 
  const [isBlocked, setIsBlocked] = useState('initial');
  const [isMuted, setIsMuted] = useState('initial');
  const handleMuteClick = (e) => {
    e.stopPropagation();
    setIsMuted('muted');
  };
  const handleBlockClick = (e) => {
    e.stopPropagation(); // Stops the profile from opening
    setIsBlocked('blocked');
  };


  const handleFollowClick = (e) => {
    e.stopPropagation(); // Prevents opening the profile page when clicking the button
    setFollowState('requested');
  };

  const handleConnectClick = (e) => {
    e.stopPropagation();
    setConnectState('requested');
  };

  const handleAcceptClick = (e) => {
    e.stopPropagation();
    setRequestStatus('accepted');
  };

  const handleIgnoreClick = (e) => {
    e.stopPropagation();
    setRequestStatus('ignored');
  };

  return (
    <div 
      className="card mb-3 border-0 shadow-sm list-group-item-action" 
      style={{ borderRadius: '16px', padding: '15px 20px', cursor: 'pointer', transition: 'all 0.2s' }}
      onClick={() => onProfileClick && onProfileClick(user)}
    >
      <div className="d-flex align-items-center justify-content-between flex-wrap g-2">
        

        <div className="d-flex align-items-center mr-3 my-1">
          <img 
            src={user.avatar || defaultAvatar} 
            className="rounded-circle mr-3" 
            alt={user.name} 
            width="50" 
            height="50"
            style={{ objectFit: 'cover' }} 
          />
          <div>
            <div className="d-flex align-items-center">
              <strong className="h6 mb-0 mr-2">{user.name}</strong>
              <span className={`role-badge ${user.role === 'Scout' ? 'badge-scout' : 'badge-player'}`}>
                {user.role}
              </span>
            </div>
            {user.username && (
              <div className="text-muted small">@{user.username}</div>
            )}
          </div>
        </div>


        <div className="d-flex align-items-center my-1" onClick={(e) => e.stopPropagation()}>
          

          {pageType === 'explore' && (
            <>
              {followState === 'initial' ? (
                <button 
                  className="btn btn-follow btn-sm rounded-pill px-3 mr-2 font-weight-bold"
                  onClick={handleFollowClick}
                >
                  Follow
                </button>
              ) : (
                <button className="btn btn-light btn-sm rounded-pill px-3 mr-2 text-muted" disabled>
                  Requested
                </button>
              )}

              {connectState === 'initial' ? (
                <button 
                  className="btn btn-connect btn-sm rounded-pill px-3 font-weight-bold"
                  onClick={handleConnectClick}
                >
                  Connect
                </button>
              ) : (
                <button className="btn btn-light btn-sm rounded-pill px-3 text-muted" disabled>
                  Requested
                </button>
              )}
            </>
          )}

          {/* 👇 YOUR EXISTING CODE (Don't change this) 👇 */}
          {pageType === 'notifications' && (
            <>
              {/* CHECK WHICH TAB IS ACTIVE INSIDE NOTIFICATIONS */}
              {activeTab === 'network' ? (
            
                /* --- IF ON 'MY NETWORK' TAB --- */
                <>
                  {isMuted === 'initial' ? (
                    <button 
                      className="btn btn-outline-dark btn-sm rounded-pill px-3 font-weight-bold"
                      onClick={handleMuteClick}
                    >
                      Mute
                    </button>
                  ) : (
                    <button 
                      className="btn btn-light btn-sm rounded-pill font-weight-bold text-muted border" 
                      disabled 
                      style={{ backgroundColor: '#f8f9fa', cursor: 'default' }}
                    >
                      Muted
                    </button>
                  )}
                  {isBlocked === 'initial' ? (
                    <button 
                      className="btn btn-outline-danger btn-sm rounded-pill px-3 mr-2 font-weight-bold"
                      onClick={handleBlockClick}
                    >
                      Block
                    </button>
                  ) : (
                    <button 
                      className="btn btn-light btn-sm rounded-pill px-3 mr-2 font-weight-bold text-muted border" 
                      disabled 
                      style={{ backgroundColor: '#f8f9fa', cursor: 'default' }}
                    >
                      Blocked
                    </button>
                  )}
                </>

              ) : (
                
                /* --- IF ON ANY OTHER TAB (Requests, etc.) --- */
                <>
                  {requestStatus === 'pending' && (
                    <>
                      <button 
                        className="btn btn-success btn-sm rounded-pill px-3 mr-2 font-weight-bold"
                        onClick={handleAcceptClick}
                      >
                        Accept
                      </button>
                      <button 
                        className="btn btn-outline-secondary btn-sm rounded-pill px-3 font-weight-bold"
                        onClick={handleIgnoreClick}
                      >
                        Ignore
                      </button>
                    </>
                  )}

                  {requestStatus === 'accepted' && (
                    <button 
                      className="btn btn-sm rounded-pill font-weight-bold border-0" 
                      disabled 
                      style={{ 
                        minWidth: '160px', 
                        backgroundColor: '#d4edda', 
                        color: '#155724',
                        cursor: 'default',
                        opacity: '1' 
                      }}
                    >
                      ✓ Accepted
                    </button>
                  )}

                  {requestStatus === 'ignored' && (
                    <button 
                      className="btn btn-light btn-sm rounded-pill font-weight-bold text-muted border" 
                      disabled 
                      style={{ 
                        minWidth: '160px', 
                        backgroundColor: '#f8f9fa',
                        cursor: 'default' 
                      }}
                    >
                      ✕ Ignored
                    </button>
                  )}
                </>
              )}
            </>
          )}

        </div>

      </div>
    </div>
  );
}

export default AccountCard;