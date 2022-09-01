import React from 'react';
import Logo from '../Logo/Logo';
import Link from '../Link/Link';
import './Nav.css';

export const Nav = () =>
{

  const logout = () =>
  {
    localStorage.clear();
    window.location.href = '/login';
  }

  return (
    <nav className="mzw-nav-container">
      <div className="mzw-nav">
        <Logo />
        <div>
          <Link href="/accounts" onColor padded>Home</Link>
          <Link href="/accounts/map" onColor padded>Map</Link>
          <button className="mzw-link mzw-link--padded mzw-link--onColor" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}