import React from 'react';
import { ClipboardList } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center">
        <ClipboardList className="w-8 h-8 mr-3" />
        <h1 className="text-2xl font-bold">TaskMaster Pro</h1>
      </div>
    </header>
  );
};

export default Header;