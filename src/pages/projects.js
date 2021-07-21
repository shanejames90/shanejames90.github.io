import { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import MyProjects from '../components/myprojects';
import FloatingActionButton from '../components/themeFab';

export default function Projects() {
  useEffect(() => {
    document.title = "Shane's Projects";
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-background dark:bg-gray-darkest">
      <Header />
      <div className="flex-1 overflow-y-auto p-1">
        <MyProjects />
      </div>
      <FloatingActionButton />
      <Footer />
    </div>
  );
}
