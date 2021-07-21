import React from 'react';
import Fab from '@material-ui/core/Fab';
import DarkModeNav from './darkModeNav';

export default function FloatingActionButton() {
  return (
    <footer className="h-0 mb-1">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-center h-full">
          <div className="text-gray-700 text-center flex items-center align-items">
            <Fab color="primary" size="small" aria-label="theme">
              <DarkModeNav />
            </Fab>
          </div>
        </div>
      </div>
    </footer>
  );
}
