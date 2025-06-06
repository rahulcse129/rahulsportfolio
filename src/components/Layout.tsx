import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Doodles from './Doodles';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow relative overflow-x-hidden">
        <Doodles />
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;