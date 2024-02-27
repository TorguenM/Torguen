import './App.css';
import { useEffect } from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder, AdminPortal } from "@frontegg/react";

export function App(): JSX.Element {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const handleClick = () => {
    AdminPortal.show();
  }

  return (
    <div className="App">
      { isAuthenticated ? (
        <div className='card'>
          <div>
            <img src={user?.profilePictureUrl ?? 'default.jpg'} alt={user?.name}/>
          </div>
          <div className='detail'>
            <span className='heading'>Name: {user?.name}</span>
          </div>
          <div>
            <button className='button' onClick={() => logout()}>Click to logout</button>
          </div>
          <div>
            <button className='button' onClick={() => handleClick}>Settings</button>
          </div>
        </div>
      ) : (
        <div>
          <button className='button' onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}