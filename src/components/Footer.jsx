import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center p-4 bg-gray-100 text-gray-700">
      <p>
        Desenvolvido por{' '}
        <a href="https://www.instagram.com/vitoriiarayssa/" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
          Rayssa Silva
        </a>
        <br />
        com muito amor para{' '}
        <a href="https://www.instagram.com/ingridhelenx/" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
          Ingrid
        </a>
      </p>
    </footer>
  );
};

export default Footer;
