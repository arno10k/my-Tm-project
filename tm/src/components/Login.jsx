import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ setIsAuthenticated }) {
  const [inputIdentifier, setInputIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  // Chosen username, email, and password
  const validUser = 'arno';
  const validEmail = 'arno@footect.com';
  const correctPassword = '1234';

  const handleLogin = (e) => {
    e.preventDefault();

    if ((inputIdentifier === validUser || inputIdentifier === validEmail) && password === correctPassword) {
      // 1. Save state in sessionStorage so it persists while browsing
      sessionStorage.setItem('isLoggedIn', 'true');
      
      // 2. Update the app state if the prop was passed
      if (setIsAuthenticated) {
        setIsAuthenticated(true);
      }

      // 3. Redirect to the home page
      navigate('/home');
    } else {
      setError('Invalid username/email or password!');
    }
  };

  return (
    <section className="gradient-custom vh-100 d-flex align-items-center justify-content-center">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-4">Please enter your login and password!</p>

                  {error && <div className="alert alert-danger py-2">{error}</div>}

                  <form onSubmit={handleLogin}>
                    <div className="form-outline form-white mb-4 text-left">
                      <label className="form-label" htmlFor="typeEmailX">Username or Email</label>
                      <input 
                        type="text" 
                        id="typeEmailX" 
                        className="form-control form-control-lg" 
                        value={inputIdentifier}
                        onChange={(e) => setInputIdentifier(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-outline form-white mb-4 text-left">
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                      <input 
                        type="password" 
                        id="typePasswordX" 
                        className="form-control form-control-lg" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <p className="small mb-5 pb-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                  </form>

                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                    <a href="#!" className="text-white mx-4"><i className="fab fa-twitter fa-lg"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                  </div>

                </div>

                <div>
                  <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;