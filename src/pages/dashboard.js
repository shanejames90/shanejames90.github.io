import { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar/index.js';

export default function Dashboard() {
  useEffect(() => {
    document.title = 'Welcome!';
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-background">
      <Header />
      <div className="flex-1 overflow-y-auto p-1">
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
          <Timeline />
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
