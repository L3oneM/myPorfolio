import React from 'react';

import './socialIcons.scss';

const SocialIcons = ({ currentPage }) => {
  return (
    <footer>
      <div
        className={`${
          currentPage === 'My Work' ? 'hide-footer' : ''
        } icons animated fadeIn`}
      >
        <a
          href='https://github.com/L3oneM'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github fa-3x'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/apostolos-theodoros-matios-052107183/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin fa-3x'></i>
        </a>
        <a
          href='https://www.facebook.com/apostolis.matios.98'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-facebook fa-3x'></i>
        </a>
        {/* <a href='#!'>
          <i className='fab fa-telegram fa-3x'></i>
        </a> */}
      </div>
      <div className='copyright'>Apostolos Matios &copy; 2019</div>
    </footer>
  );
};

export default SocialIcons;
