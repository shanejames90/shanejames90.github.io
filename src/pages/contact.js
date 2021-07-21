import { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactMe from '../components/contactMe';
import FloatingActionButton from '../components/themeFab';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Me';
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-background dark:bg-gray-darkest">
      <Header />
      <div className="flex-1 overflow-y-auto p-1">
        <ContactMe />
      </div>
      <FloatingActionButton />
      <Footer />
    </div>
  );
}
