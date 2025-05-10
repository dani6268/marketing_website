
    import React from 'react';

    const Header = () => {
      return (
        <header className="container mx-auto px-4 py-6 flex justify-between items-center sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            SoftSell
          </h1>
          <nav>
            <a href="#contact" className="text-lg hover:text-pink-400 transition-colors">Contact Us</a>
          </nav>
        </header>
      );
    };

    export default Header;
  