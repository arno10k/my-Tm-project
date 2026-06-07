import soccer from '../assets/soccer.png'

const Nav = ({ setCurrentView }) => {
    return (
        <nav>
            <button className="logo" onClick={() => setCurrentView('profile')}>
                <img src={soccer} alt="logo" style={{width: '40px', height: '40px'}} /> 
            </button>
            <input type="text" className='search' placeholder='search' />   
            <span className="nav-links">
               <button onClick={() => setCurrentView('home')}>
                <i className="fas fa-home"></i>
                </button>
                 <button onClick={() => setCurrentView('messages')}>
                    <i className='fas fa-comment-alt' /> 
                </button>
                 <button onClick={() => setCurrentView('explore')}>
                    <i className='fas fa-compass' /> 
                </button>
                 <button onClick={() => setCurrentView('notifications')}>
                    <i className='fas fa-heart' /> 
                </button>
            </span>
        </nav>
   )     
}

export default Nav