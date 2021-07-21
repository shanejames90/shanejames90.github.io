import { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import MyResume from '../components/myresume';
import FloatingActionButton from '../components/themeFab';

export default function Resume() {
  useEffect(() => {
    document.title = 'Resume';
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-background dark:bg-gray-darkest">
      <Header />
      <div className="flex-1 overflow-y-auto p-1">
        <MyResume />
      </div>
      <FloatingActionButton />
      <Footer />
    </div>
  );
}
