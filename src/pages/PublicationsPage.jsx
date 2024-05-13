import React from 'react';
import { PublicationList } from '../components/PublicationList';
import { NavbarDocument } from '../components/navbars/Navbar';

export const PublicationsPage = () => {
  return (
    <div>
      <NavbarDocument/>
      <h1>Publications</h1>
      <PublicationList />
    </div>
  );
};