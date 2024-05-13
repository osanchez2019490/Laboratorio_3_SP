import React from 'react';
import { NavbarDocument } from '../components/navbars/Navbar';

export const WelcomePage = () => {
  return (
    <div className='container d-flex flex-column align-items-center py-5'>
      <NavbarDocument />
      <div className='col-md-6 offset-md-0.5 text-center'>
        <h1 className='mt-5'>Welcome to My Blog</h1>
        <p>
          Welcome to my personal blog where I present some of my projects that you can gladly see and comment on!
        </p>
      </div>
      <div className='image-container mt-5'>
        <img src='../assests/img/Blog.jpg' alt='Image' className='img-fluid' />
      </div>
      <div className='col-md-6 offset-md-0.5 text-center'>
        <h1 className='mt-5'>Welcome to My Blog</h1>
        <p>
          Welcome to my personal blog where I present some of my projects that you can gladly see and comment on!
        </p>
      </div>
      <div className='col-md-6 offset-md-0.5 text-center'>
        <h1 className='mt-5'>Welcome to My Blog</h1>
        <p>
          Welcome to my personal blog where I present some of my projects that you can gladly see and comment on!
        </p>
      </div>
    </div>
  );
};
